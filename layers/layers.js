ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32748").setExtent([783966.502229, 9230069.148588, 803265.783061, 9240821.148588]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Tutupan_Lahan_Kota_Bandung_1 = new ol.format.GeoJSON();
var features_Tutupan_Lahan_Kota_Bandung_1 = format_Tutupan_Lahan_Kota_Bandung_1.readFeatures(json_Tutupan_Lahan_Kota_Bandung_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32748'});
var jsonSource_Tutupan_Lahan_Kota_Bandung_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tutupan_Lahan_Kota_Bandung_1.addFeatures(features_Tutupan_Lahan_Kota_Bandung_1);
var lyr_Tutupan_Lahan_Kota_Bandung_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tutupan_Lahan_Kota_Bandung_1, 
                style: style_Tutupan_Lahan_Kota_Bandung_1,
                popuplayertitle: 'Tutupan_Lahan_Kota_Bandung',
                interactive: true,
    title: 'Tutupan_Lahan_Kota_Bandung<br />\
    <img src="styles/legend/Tutupan_Lahan_Kota_Bandung_1_0.png" /> Perairan<br />\
    <img src="styles/legend/Tutupan_Lahan_Kota_Bandung_1_1.png" /> Hutan/Pohon<br />\
    <img src="styles/legend/Tutupan_Lahan_Kota_Bandung_1_2.png" /> Vegetasi Tergenang<br />\
    <img src="styles/legend/Tutupan_Lahan_Kota_Bandung_1_3.png" /> Lahan Pertanian<br />\
    <img src="styles/legend/Tutupan_Lahan_Kota_Bandung_1_4.png" /> Lahan Terbangun<br />\
    <img src="styles/legend/Tutupan_Lahan_Kota_Bandung_1_5.png" /> Lahan Terbuka<br />\
    <img src="styles/legend/Tutupan_Lahan_Kota_Bandung_1_6.png" /> Padang Rumput<br />' });
var format_Wilayah_Administrasi_Kota_Bandung_2 = new ol.format.GeoJSON();
var features_Wilayah_Administrasi_Kota_Bandung_2 = format_Wilayah_Administrasi_Kota_Bandung_2.readFeatures(json_Wilayah_Administrasi_Kota_Bandung_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32748'});
var jsonSource_Wilayah_Administrasi_Kota_Bandung_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Wilayah_Administrasi_Kota_Bandung_2.addFeatures(features_Wilayah_Administrasi_Kota_Bandung_2);
var lyr_Wilayah_Administrasi_Kota_Bandung_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Wilayah_Administrasi_Kota_Bandung_2, 
                style: style_Wilayah_Administrasi_Kota_Bandung_2,
                popuplayertitle: 'Wilayah_Administrasi_Kota_Bandung',
                interactive: true,
    title: 'Wilayah_Administrasi_Kota_Bandung<br />\
    <img src="styles/legend/Wilayah_Administrasi_Kota_Bandung_2_0.png" /> Andir<br />\
    <img src="styles/legend/Wilayah_Administrasi_Kota_Bandung_2_1.png" /> Antapani<br />\
    <img src="styles/legend/Wilayah_Administrasi_Kota_Bandung_2_2.png" /> Arcamanik<br />\
    <img src="styles/legend/Wilayah_Administrasi_Kota_Bandung_2_3.png" /> Astana Anyar<br />\
    <img src="styles/legend/Wilayah_Administrasi_Kota_Bandung_2_4.png" /> Babakan Ciparay<br />\
    <img src="styles/legend/Wilayah_Administrasi_Kota_Bandung_2_5.png" /> Bandung Kidul<br />\
    <img src="styles/legend/Wilayah_Administrasi_Kota_Bandung_2_6.png" /> Bandung Kulon<br />\
    <img src="styles/legend/Wilayah_Administrasi_Kota_Bandung_2_7.png" /> Bandung Wetan<br />\
    <img src="styles/legend/Wilayah_Administrasi_Kota_Bandung_2_8.png" /> Batununggal<br />\
    <img src="styles/legend/Wilayah_Administrasi_Kota_Bandung_2_9.png" /> Bojongloa Kaler<br />\
    <img src="styles/legend/Wilayah_Administrasi_Kota_Bandung_2_10.png" /> Bojongloa Kidul<br />\
    <img src="styles/legend/Wilayah_Administrasi_Kota_Bandung_2_11.png" /> Buahbatu<br />\
    <img src="styles/legend/Wilayah_Administrasi_Kota_Bandung_2_12.png" /> Cibeunying Kaler<br />\
    <img src="styles/legend/Wilayah_Administrasi_Kota_Bandung_2_13.png" /> Cibeunying Kidul<br />\
    <img src="styles/legend/Wilayah_Administrasi_Kota_Bandung_2_14.png" /> Cibiru<br />\
    <img src="styles/legend/Wilayah_Administrasi_Kota_Bandung_2_15.png" /> Cicendo<br />\
    <img src="styles/legend/Wilayah_Administrasi_Kota_Bandung_2_16.png" /> Cidadap<br />\
    <img src="styles/legend/Wilayah_Administrasi_Kota_Bandung_2_17.png" /> Cimahi Utara<br />\
    <img src="styles/legend/Wilayah_Administrasi_Kota_Bandung_2_18.png" /> Cinambo<br />\
    <img src="styles/legend/Wilayah_Administrasi_Kota_Bandung_2_19.png" /> Coblong<br />\
    <img src="styles/legend/Wilayah_Administrasi_Kota_Bandung_2_20.png" /> Gedebage<br />\
    <img src="styles/legend/Wilayah_Administrasi_Kota_Bandung_2_21.png" /> Kiaracondong<br />\
    <img src="styles/legend/Wilayah_Administrasi_Kota_Bandung_2_22.png" /> Lengkong<br />\
    <img src="styles/legend/Wilayah_Administrasi_Kota_Bandung_2_23.png" /> Mandalajati<br />\
    <img src="styles/legend/Wilayah_Administrasi_Kota_Bandung_2_24.png" /> Panyileukan<br />\
    <img src="styles/legend/Wilayah_Administrasi_Kota_Bandung_2_25.png" /> Rancasari<br />\
    <img src="styles/legend/Wilayah_Administrasi_Kota_Bandung_2_26.png" /> Regol<br />\
    <img src="styles/legend/Wilayah_Administrasi_Kota_Bandung_2_27.png" /> Sukajadi<br />\
    <img src="styles/legend/Wilayah_Administrasi_Kota_Bandung_2_28.png" /> Sukasari<br />\
    <img src="styles/legend/Wilayah_Administrasi_Kota_Bandung_2_29.png" /> Sumur Bandung<br />\
    <img src="styles/legend/Wilayah_Administrasi_Kota_Bandung_2_30.png" /> Ujungberung<br />' });

lyr_OSMStandard_0.setVisible(true);lyr_Tutupan_Lahan_Kota_Bandung_1.setVisible(true);lyr_Wilayah_Administrasi_Kota_Bandung_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Tutupan_Lahan_Kota_Bandung_1,lyr_Wilayah_Administrasi_Kota_Bandung_2];
lyr_Tutupan_Lahan_Kota_Bandung_1.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', 'Kelas': 'Kelas', });
lyr_Wilayah_Administrasi_Kota_Bandung_2.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'LCODE': 'LCODE', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Tutupan_Lahan_Kota_Bandung_1.set('fieldImages', {'fid': 'TextEdit', 'DN': 'TextEdit', 'Kelas': 'TextEdit', });
lyr_Wilayah_Administrasi_Kota_Bandung_2.set('fieldImages', {'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'LCODE': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Tutupan_Lahan_Kota_Bandung_1.set('fieldLabels', {'fid': 'inline label - visible with data', 'DN': 'inline label - visible with data', 'Kelas': 'inline label - visible with data', });
lyr_Wilayah_Administrasi_Kota_Bandung_2.set('fieldLabels', {'NAMOBJ': 'no label', 'REMARK': 'no label', 'LCODE': 'no label', 'WADMKC': 'inline label - visible with data', 'WADMKK': 'no label', 'WADMPR': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Wilayah_Administrasi_Kota_Bandung_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});