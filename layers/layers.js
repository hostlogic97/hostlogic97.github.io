var wms_layers = [];


        var lyr_BaseMap_0 = new ol.layer.Tile({
            'title': 'Base Map',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap</a>',
                url: 'https://maptiles.p.rapidapi.com/en/map/v1/{z}/{x}/{y}.png?rapidapi-key=e3e414d67bmshc520a45fc66fdd7p13ed72jsn1667145654cc'
            })
        });
var lyr_Topography_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "Topography",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Topography_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [9128182.784008, 3248956.278951, 9350852.687675, 3503567.696389]
                            })
                        });
var format_240520tracks_2 = new ol.format.GeoJSON();
var features_240520tracks_2 = format_240520tracks_2.readFeatures(json_240520tracks_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_240520tracks_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_240520tracks_2.addFeatures(features_240520tracks_2);
var lyr_240520tracks_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_240520tracks_2, 
                style: style_240520tracks_2,
                popuplayertitle: "240520tracks",
                interactive: false,
                title: '<img src="styles/legend/240520tracks_2.png" /> 240520tracks'
            });
var format_240521tracks_3 = new ol.format.GeoJSON();
var features_240521tracks_3 = format_240521tracks_3.readFeatures(json_240521tracks_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_240521tracks_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_240521tracks_3.addFeatures(features_240521tracks_3);
var lyr_240521tracks_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_240521tracks_3, 
                style: style_240521tracks_3,
                popuplayertitle: "240521tracks",
                interactive: false,
                title: '<img src="styles/legend/240521tracks_3.png" /> 240521tracks'
            });
var format_240522tracks_4 = new ol.format.GeoJSON();
var features_240522tracks_4 = format_240522tracks_4.readFeatures(json_240522tracks_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_240522tracks_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_240522tracks_4.addFeatures(features_240522tracks_4);
var lyr_240522tracks_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_240522tracks_4, 
                style: style_240522tracks_4,
                popuplayertitle: "240522tracks",
                interactive: false,
                title: '<img src="styles/legend/240522tracks_4.png" /> 240522tracks'
            });
var format_240523tracks_5 = new ol.format.GeoJSON();
var features_240523tracks_5 = format_240523tracks_5.readFeatures(json_240523tracks_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_240523tracks_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_240523tracks_5.addFeatures(features_240523tracks_5);
var lyr_240523tracks_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_240523tracks_5, 
                style: style_240523tracks_5,
                popuplayertitle: "240523tracks",
                interactive: false,
                title: '<img src="styles/legend/240523tracks_5.png" /> 240523tracks'
            });
var format_240525tracks_6 = new ol.format.GeoJSON();
var features_240525tracks_6 = format_240525tracks_6.readFeatures(json_240525tracks_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_240525tracks_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_240525tracks_6.addFeatures(features_240525tracks_6);
var lyr_240525tracks_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_240525tracks_6, 
                style: style_240525tracks_6,
                popuplayertitle: "240525tracks",
                interactive: false,
                title: '<img src="styles/legend/240525tracks_6.png" /> 240525tracks'
            });
var format_240526tracks_7 = new ol.format.GeoJSON();
var features_240526tracks_7 = format_240526tracks_7.readFeatures(json_240526tracks_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_240526tracks_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_240526tracks_7.addFeatures(features_240526tracks_7);
var lyr_240526tracks_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_240526tracks_7, 
                style: style_240526tracks_7,
                popuplayertitle: "240526tracks",
                interactive: false,
                title: '<img src="styles/legend/240526tracks_7.png" /> 240526tracks'
            });
var format_240527tracks_8 = new ol.format.GeoJSON();
var features_240527tracks_8 = format_240527tracks_8.readFeatures(json_240527tracks_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_240527tracks_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_240527tracks_8.addFeatures(features_240527tracks_8);
var lyr_240527tracks_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_240527tracks_8, 
                style: style_240527tracks_8,
                popuplayertitle: "240527tracks",
                interactive: false,
                title: '<img src="styles/legend/240527tracks_8.png" /> 240527tracks'
            });
var format_240528tracks_9 = new ol.format.GeoJSON();
var features_240528tracks_9 = format_240528tracks_9.readFeatures(json_240528tracks_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_240528tracks_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_240528tracks_9.addFeatures(features_240528tracks_9);
var lyr_240528tracks_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_240528tracks_9, 
                style: style_240528tracks_9,
                popuplayertitle: "240528tracks",
                interactive: false,
                title: '<img src="styles/legend/240528tracks_9.png" /> 240528tracks'
            });
var format_240529tracks_10 = new ol.format.GeoJSON();
var features_240529tracks_10 = format_240529tracks_10.readFeatures(json_240529tracks_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_240529tracks_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_240529tracks_10.addFeatures(features_240529tracks_10);
var lyr_240529tracks_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_240529tracks_10, 
                style: style_240529tracks_10,
                popuplayertitle: "240529tracks",
                interactive: false,
                title: '<img src="styles/legend/240529tracks_10.png" /> 240529tracks'
            });
var format_240530tracks_11 = new ol.format.GeoJSON();
var features_240530tracks_11 = format_240530tracks_11.readFeatures(json_240530tracks_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_240530tracks_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_240530tracks_11.addFeatures(features_240530tracks_11);
var lyr_240530tracks_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_240530tracks_11, 
                style: style_240530tracks_11,
                popuplayertitle: "240530tracks",
                interactive: false,
                title: '<img src="styles/legend/240530tracks_11.png" /> 240530tracks'
            });
var format_240531tracks_12 = new ol.format.GeoJSON();
var features_240531tracks_12 = format_240531tracks_12.readFeatures(json_240531tracks_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_240531tracks_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_240531tracks_12.addFeatures(features_240531tracks_12);
var lyr_240531tracks_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_240531tracks_12, 
                style: style_240531tracks_12,
                popuplayertitle: "240531tracks",
                interactive: false,
                title: '<img src="styles/legend/240531tracks_12.png" /> 240531tracks'
            });
var format_240601tracks_13 = new ol.format.GeoJSON();
var features_240601tracks_13 = format_240601tracks_13.readFeatures(json_240601tracks_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_240601tracks_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_240601tracks_13.addFeatures(features_240601tracks_13);
var lyr_240601tracks_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_240601tracks_13, 
                style: style_240601tracks_13,
                popuplayertitle: "240601tracks",
                interactive: false,
                title: '<img src="styles/legend/240601tracks_13.png" /> 240601tracks'
            });
var format_240602tracks_14 = new ol.format.GeoJSON();
var features_240602tracks_14 = format_240602tracks_14.readFeatures(json_240602tracks_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_240602tracks_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_240602tracks_14.addFeatures(features_240602tracks_14);
var lyr_240602tracks_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_240602tracks_14, 
                style: style_240602tracks_14,
                popuplayertitle: "240602tracks",
                interactive: false,
                title: '<img src="styles/legend/240602tracks_14.png" /> 240602tracks'
            });
var format_240603tracks_15 = new ol.format.GeoJSON();
var features_240603tracks_15 = format_240603tracks_15.readFeatures(json_240603tracks_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_240603tracks_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_240603tracks_15.addFeatures(features_240603tracks_15);
var lyr_240603tracks_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_240603tracks_15, 
                style: style_240603tracks_15,
                popuplayertitle: "240603tracks",
                interactive: false,
                title: '<img src="styles/legend/240603tracks_15.png" /> 240603tracks'
            });
var format_240604tracks_16 = new ol.format.GeoJSON();
var features_240604tracks_16 = format_240604tracks_16.readFeatures(json_240604tracks_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_240604tracks_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_240604tracks_16.addFeatures(features_240604tracks_16);
var lyr_240604tracks_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_240604tracks_16, 
                style: style_240604tracks_16,
                popuplayertitle: "240604tracks",
                interactive: false,
                title: '<img src="styles/legend/240604tracks_16.png" /> 240604tracks'
            });
var format_240605tracks_17 = new ol.format.GeoJSON();
var features_240605tracks_17 = format_240605tracks_17.readFeatures(json_240605tracks_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_240605tracks_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_240605tracks_17.addFeatures(features_240605tracks_17);
var lyr_240605tracks_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_240605tracks_17, 
                style: style_240605tracks_17,
                popuplayertitle: "240605tracks",
                interactive: false,
                title: '<img src="styles/legend/240605tracks_17.png" /> 240605tracks'
            });
var format_240606tracks_18 = new ol.format.GeoJSON();
var features_240606tracks_18 = format_240606tracks_18.readFeatures(json_240606tracks_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_240606tracks_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_240606tracks_18.addFeatures(features_240606tracks_18);
var lyr_240606tracks_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_240606tracks_18, 
                style: style_240606tracks_18,
                popuplayertitle: "240606tracks",
                interactive: false,
                title: '<img src="styles/legend/240606tracks_18.png" /> 240606tracks'
            });
var format_240607tracks_19 = new ol.format.GeoJSON();
var features_240607tracks_19 = format_240607tracks_19.readFeatures(json_240607tracks_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_240607tracks_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_240607tracks_19.addFeatures(features_240607tracks_19);
var lyr_240607tracks_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_240607tracks_19, 
                style: style_240607tracks_19,
                popuplayertitle: "240607tracks",
                interactive: false,
                title: '<img src="styles/legend/240607tracks_19.png" /> 240607tracks'
            });
var format_240609tracks_20 = new ol.format.GeoJSON();
var features_240609tracks_20 = format_240609tracks_20.readFeatures(json_240609tracks_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_240609tracks_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_240609tracks_20.addFeatures(features_240609tracks_20);
var lyr_240609tracks_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_240609tracks_20, 
                style: style_240609tracks_20,
                popuplayertitle: "240609tracks",
                interactive: false,
                title: '<img src="styles/legend/240609tracks_20.png" /> 240609tracks'
            });
var format_240610tracks_21 = new ol.format.GeoJSON();
var features_240610tracks_21 = format_240610tracks_21.readFeatures(json_240610tracks_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_240610tracks_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_240610tracks_21.addFeatures(features_240610tracks_21);
var lyr_240610tracks_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_240610tracks_21, 
                style: style_240610tracks_21,
                popuplayertitle: "240610tracks",
                interactive: false,
                title: '<img src="styles/legend/240610tracks_21.png" /> 240610tracks'
            });
var format_240611tracks_22 = new ol.format.GeoJSON();
var features_240611tracks_22 = format_240611tracks_22.readFeatures(json_240611tracks_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_240611tracks_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_240611tracks_22.addFeatures(features_240611tracks_22);
var lyr_240611tracks_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_240611tracks_22, 
                style: style_240611tracks_22,
                popuplayertitle: "240611tracks",
                interactive: false,
                title: '<img src="styles/legend/240611tracks_22.png" /> 240611tracks'
            });
var format_240612tracks_23 = new ol.format.GeoJSON();
var features_240612tracks_23 = format_240612tracks_23.readFeatures(json_240612tracks_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_240612tracks_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_240612tracks_23.addFeatures(features_240612tracks_23);
var lyr_240612tracks_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_240612tracks_23, 
                style: style_240612tracks_23,
                popuplayertitle: "240612tracks",
                interactive: false,
                title: '<img src="styles/legend/240612tracks_23.png" /> 240612tracks'
            });
var format_240613tracks_24 = new ol.format.GeoJSON();
var features_240613tracks_24 = format_240613tracks_24.readFeatures(json_240613tracks_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_240613tracks_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_240613tracks_24.addFeatures(features_240613tracks_24);
var lyr_240613tracks_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_240613tracks_24, 
                style: style_240613tracks_24,
                popuplayertitle: "240613tracks",
                interactive: false,
                title: '<img src="styles/legend/240613tracks_24.png" /> 240613tracks'
            });
var format_campsites_25 = new ol.format.GeoJSON();
var features_campsites_25 = format_campsites_25.readFeatures(json_campsites_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_campsites_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_campsites_25.addFeatures(features_campsites_25);
var lyr_campsites_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_campsites_25,
maxResolution:280.0446615226196,
 minResolution:0.14002233076130982,

                style: style_campsites_25,
                popuplayertitle: "campsites",
                interactive: true,
                title: '<img src="styles/legend/campsites_25.png" /> campsites'
            });
var group_Tracks = new ol.layer.Group({
                                layers: [lyr_240520tracks_2,lyr_240521tracks_3,lyr_240522tracks_4,lyr_240523tracks_5,lyr_240525tracks_6,lyr_240526tracks_7,lyr_240527tracks_8,lyr_240528tracks_9,lyr_240529tracks_10,lyr_240530tracks_11,lyr_240531tracks_12,lyr_240601tracks_13,lyr_240602tracks_14,lyr_240603tracks_15,lyr_240604tracks_16,lyr_240605tracks_17,lyr_240606tracks_18,lyr_240607tracks_19,lyr_240609tracks_20,lyr_240610tracks_21,lyr_240611tracks_22,lyr_240612tracks_23,lyr_240613tracks_24,],
                                fold: "open",
                                title: "Tracks"});

lyr_BaseMap_0.setVisible(true);lyr_Topography_1.setVisible(true);lyr_240520tracks_2.setVisible(true);lyr_240521tracks_3.setVisible(true);lyr_240522tracks_4.setVisible(true);lyr_240523tracks_5.setVisible(true);lyr_240525tracks_6.setVisible(true);lyr_240526tracks_7.setVisible(true);lyr_240527tracks_8.setVisible(true);lyr_240528tracks_9.setVisible(true);lyr_240529tracks_10.setVisible(true);lyr_240530tracks_11.setVisible(true);lyr_240531tracks_12.setVisible(true);lyr_240601tracks_13.setVisible(true);lyr_240602tracks_14.setVisible(true);lyr_240603tracks_15.setVisible(true);lyr_240604tracks_16.setVisible(true);lyr_240605tracks_17.setVisible(true);lyr_240606tracks_18.setVisible(true);lyr_240607tracks_19.setVisible(true);lyr_240609tracks_20.setVisible(true);lyr_240610tracks_21.setVisible(true);lyr_240611tracks_22.setVisible(true);lyr_240612tracks_23.setVisible(true);lyr_240613tracks_24.setVisible(true);lyr_campsites_25.setVisible(true);
var layersList = [lyr_BaseMap_0,lyr_Topography_1,group_Tracks,lyr_campsites_25];
lyr_240520tracks_2.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_240521tracks_3.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_240522tracks_4.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_240523tracks_5.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_240525tracks_6.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_240526tracks_7.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_240527tracks_8.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_240528tracks_9.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_240529tracks_10.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_240530tracks_11.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_240531tracks_12.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_240601tracks_13.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_240602tracks_14.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_240603tracks_15.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_240604tracks_16.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_240605tracks_17.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_240606tracks_18.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_240607tracks_19.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_240609tracks_20.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_240610tracks_21.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_240611tracks_22.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_240612tracks_23.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_240613tracks_24.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_campsites_25.set('fieldAliases', {'id': 'id', 'Camp Name': 'Camp Name', 'Date Start': 'Date Start', 'Date End': 'Date End', 'Altitude': 'Altitude', });
lyr_240520tracks_2.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', });
lyr_240521tracks_3.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', });
lyr_240522tracks_4.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', });
lyr_240523tracks_5.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', });
lyr_240525tracks_6.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', });
lyr_240526tracks_7.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', });
lyr_240527tracks_8.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', });
lyr_240528tracks_9.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', });
lyr_240529tracks_10.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', });
lyr_240530tracks_11.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', });
lyr_240531tracks_12.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', });
lyr_240601tracks_13.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', });
lyr_240602tracks_14.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', });
lyr_240603tracks_15.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', });
lyr_240604tracks_16.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', });
lyr_240605tracks_17.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', });
lyr_240606tracks_18.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', });
lyr_240607tracks_19.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', });
lyr_240609tracks_20.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', });
lyr_240610tracks_21.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', });
lyr_240611tracks_22.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', });
lyr_240612tracks_23.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', });
lyr_240613tracks_24.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', });
lyr_campsites_25.set('fieldImages', {'id': 'TextEdit', 'Camp Name': 'TextEdit', 'Date Start': 'TextEdit', 'Date End': 'TextEdit', 'Altitude': '', });
lyr_240520tracks_2.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_240521tracks_3.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_240522tracks_4.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_240523tracks_5.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_240525tracks_6.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_240526tracks_7.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_240527tracks_8.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_240528tracks_9.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_240529tracks_10.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_240530tracks_11.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_240531tracks_12.set('fieldLabels', {'name': 'inline label - always visible', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_240601tracks_13.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_240602tracks_14.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_240603tracks_15.set('fieldLabels', {'name': 'inline label - always visible', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_240604tracks_16.set('fieldLabels', {'name': 'inline label - always visible', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_240605tracks_17.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_240606tracks_18.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_240607tracks_19.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_240609tracks_20.set('fieldLabels', {'name': 'inline label - always visible', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_240610tracks_21.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_240611tracks_22.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_240612tracks_23.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_240613tracks_24.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_campsites_25.set('fieldLabels', {'id': 'hidden field', 'Camp Name': 'inline label - always visible', 'Date Start': 'inline label - always visible', 'Date End': 'inline label - always visible', 'Altitude': 'inline label - always visible', });
lyr_campsites_25.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});