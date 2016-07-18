Map = function(geoJson) {
    var self = this;

    var map = new ol.Map({
        target: 'map',
        renderer: 'canvas',
        view: new ol.View({
            maxZoom: 19,
            minZoom: 2,
            zoom: 2,
            center: [0, 0]
        })
    });

    var popup = new ol.Overlay.Popup({
        insertFirst: false,
        panMapIfOutOfView: true
    });

    self.init = function(entityType) {
        map.addLayer(new ol.layer.Group({
            'title': 'Maps',
            layers: [
                new ol.layer.Tile({
                    title: 'OpenStreetMap',
                    type: 'base',
                    visible: true,
                    source: new ol.source.OSM()
                })
            ]
        }));
        map.addLayer(createVector(entityType));

        map.addControl(new ol.control.LayerSwitcher());
        map.addControl(new ol.control.ScaleLine());
        map.addControl(new ol.control.FullScreen());
        map.addControl(new ol.control.Zoom());
        map.addControl(new Geocoder('nominatim', {
            provider: 'osm',
            lang: 'km',
            placeholder: 'Search for ...',
            limit: 5
        }));
        map.addControl(new ol.control.Control({
            element: $("#filter-control")[0]
        }));

        map.on("pointermove", setCursor);

        map.addOverlay(popup);

        map.on("click", function(e) {
            map.forEachFeatureAtPixel(e.pixel, function (feature, layer) {
                showDetails(feature);
            });
        });

        loadFilters();

        $("#filter-control>button").click(function() {
            $("#filters").toggle();
            $("#filters .content").accordion();
        });

        $("#filters button.apply").click(applyFilters);
    }

    var applyFilters = function() {
        var filters = [];
        $("#filters .filter-choices").each(function(){
            if($(this).find("input:checked").length > 0) {
                var question = $(this).attr("id");
                var answers = $(this).find("input:checked").map(function(elem){return this.id});
                filters.push(question + "=" + Array.prototype.join.call(answers));
            }
        })
        window.location.href = window.location.origin + window.location.pathname + "?" + filters.join("&");
    }

    var loadFilters = function() {
        var filters = window.location.search.slice(1).split("&").filter(String);
        $.each(filters, function(index, filter){
            var question = filter.split("=")[0];
            var answers = filter.split("=")[1].split(",");
            $.each(answers, function(index, answer){
                $("#filters").find("#" + question).find("#" + answer).attr("checked", "checked");
            });
        });
    }

    var showDetails = function(feature) {
        var newHtml = buildPopupContent(feature.getProperties()).html();
        popup.show(feature.getGeometry().getCoordinates(), newHtml);
    }

    var buildPopupContent = function(properties) {
        var popupContent = $("#popup");
        popupContent.empty();
        var id = 1;
        for(prop in properties) {
            popupContent.append(buildPopupRow(properties[prop], id));
            id++;
        }
        return popupContent;
    }

    var buildPopupRow = function(property, id) {
        if (property.value && property.label) {
            var row = $(".popup-row-template").clone();
            row.removeClass("popup-row-template");
            row.addClass("popup-row");
            row.attr("id", id);
            row.find("p.answer").text(property.value);
            row.find("span.question").text(property.label);
            row.css("display", "block");
            return row;
        }
    };

    var createVector = function(name, iconStyle) {
        var source = new ol.source.Vector({
            features: (new ol.format.GeoJSON()).readFeatures(geoJson, {featureProjection: 'EPSG:3857'})
        });

        var defaultIconSource = '/media/images/pin_entity_1.png';
        var defaultIconStyle = new ol.style.Style({
            image: new ol.style.Icon({
                anchor: [0.55, 0.8],
                anchorXUnits: 'fraction',
                anchorYUnits: 'fraction',
                src: defaultIconSource
            })
        });

        var iconSource = iconStyle ? iconStyle.getImage().getSrc() : defaultIconSource;
        return new ol.layer.Vector({
            name: name,
            title: '<img src="' + iconSource  + '">' + name,
            source: source,
            style: iconStyle || defaultIconStyle
        });
    }


    var setCursor = function (event) {
        var jTarget = $("#" + map.getTarget());
        if (map.hasFeatureAtPixel([event.originalEvent.offsetX, event.originalEvent.offsetY])) {
            jTarget.css("cursor", "pointer");
        } else {
            jTarget.css("cursor", "");
        }
    }
}