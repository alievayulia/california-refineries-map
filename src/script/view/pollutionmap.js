import template from '../../view/pollutionmap.html';
import exampleModel from '../model/example';
import exampleController from '../controller/example';
import L from 'leaflet';
import california from '../../data/cali.smaller.json';
import refineries from '../../data/refineries.json';
import { feature } from 'topojson';
import { scaleThreshold } from 'd3-scale';

exampleModel.actions = exampleController;

export default {
    vuex: exampleModel,
    render: template.render,
    staticRenderFns: template.staticRenderFns,
    mounted() {
        const map = L.map(this.$el.querySelector('.map'), {
            scrollWheelZoom: false,
            maxZoom: 14,
            minZoom: 11,
            keyboard: !('ontouchstart' in window),
            maxBounds: [[33.606189, -118.617030], [33.928975, -118.075953]],
            attributionControl: false
        }).setView([33.784497, -118.374455], 12);

        if (this.$el.offsetWidth < 600) {
            map.setView([33.797805, -118.337050], 11);
        }
            /*
        this.$el.addEventListener('resize',() => {
            if (this.$el.offsetWidth < 600) {
                map.setView([33.798126, -118.326579], 11);
            }
        });*/

        L.tileLayer(
            'https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_nolabels/{z}/{x}/{y}@2x.png',
            {
                maxZoom: 14,
                minZoom: 10,
                attribution:
                    'Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>' +
                    '<a href="https://carto.com/attribution">CARTO</a>'
            }
        ).addTo(map);

        // control that shows state info on hover
        const info = L.control();

        info.onAdd = function(map) {
            this._div = L.DomUtil.create('div', 'info');
            this.update();
            return this._div;
        };

        info.update = function(props) {
            this._div.innerHTML = props
                ? `<b>Tract in ${props.City}</b><br />
                  <br>  
                  <em>Numbers reflect scores<br>ranging from zero (best)<br>to 100 (worst).</em><br>
                  <br>
                  Pollution burden: ${props.Poll_pctl}<br />
                  Diesel particulates: ${props.DPM_pctl}<br />
                  Toxic release: ${props.TR_pctl}<br />
                  Asthma: ${props.Asthma_Pct}<br />
                  Cardiovascular disease: ${props.CVD_pctl}<br />
                  Poverty: ${props.Pov_pctl}` : '';
        };

        info.addTo(map);

        const colors = [
            '#fbe6c5',
            '#f5ccb3',
            '#ecb4a2',
            '#df9c93',
            '#d18784',
            '#c17077',
            '#af5c6a',
            '#9b4a5f',
            '#873854',
            '#70284a'
        ];

        const breaks = [10, 20, 30, 40, 50, 60, 70, 80, 90];

        let colorScale = scaleThreshold()
            .domain(breaks)
            .range(colors);

        let highlightedFeature = null;

        function style(feature) {
            return {
                weight: 1,
                opacity: 0.5,
                color: colorScale(feature.properties.Poll_pctl),
                fillOpacity: 0.7,
                fillColor: colorScale(feature.properties.Poll_pctl)
            };
        }

        function highlightFeature(e) {
            const layer = e.target;

            if (highlightedFeature) {
                geojson.resetStyle(highlightedFeature);
                info.update();
            }

            highlightedFeature = layer;

            layer.setStyle({
                opacity: 1,
                weight: 2,
                color: 'black',
                dashArray: '',
                fillOpacity: 0.7
            });
/*
            if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
                layer.bringToFront();
            }*/

            info.update(layer.feature.properties);
        }

        let geojson;

        function resetHighlight(e) {
            geojson.resetStyle(e.target);
            info.update();
        }

        function zoomToFeature(e) {
            highlightFeature(e);
            map.fitBounds(e.target.getBounds());
        }

        function onEachFeature(feature, layer) {
            layer.on({
                mouseover: highlightFeature,
                mouseout: resetHighlight,
                click: highlightFeature
            });
        }

        geojson = L.geoJson(feature(california, california.objects.cali), {
            style,
            onEachFeature
        }).addTo(map);

        let refinerylayer = L.geoJson(refineries, {
            style() {
                return {
                    fillOpacity: 0.5,
                    opacity: 1,
                    color: '#000'
                };
            }
        }).addTo(map);

/*
        map.attributionControl.addAttribution(
            'Data &copy; <a href="https://oehha.ca.gov/calenviroscreen">Office of Environmental Health Hazard Assessment</a>'
        );*/

        const legend = L.control({ position: 'bottomleft' });

        legend.onAdd = map => {
            const div = L.DomUtil.create('div', 'info legend');

            const categories = [
                '0-10',
                '10-20',
                '20-30',
                '30-40',
                '40-50',
                '50-60',
                '60-70',
                '70-80',
                '80-90',
                '90-100'
            ];

            const labels = [];

            div.innerHTML = '<b class="legendHeader">POLLUTION<br>BURDEN</b>';

            for (let i = 0; i < categories.length; i++) {
                // div.innerHTML +=

                labels.push(
                    `<i style="background:${colors[i]}"></i> ${categories[i]
                        ? categories[i]
                        : '+'}`
                );
            }

            div.innerHTML += labels.join('<br>');

            div.innerHTML +=
                '<br><br><!--<b class="legendHeader">REFINERIES</b>--><i style="border:2px solid black;background-color:rgb(77, 51, 64);"></i> REFINERY';

            return div;
        };

        legend.addTo(map);

        var marker = new L.marker([33.772928, -118.261992], { opacity: 0.01 }); //opacity may be set to zero
        marker.bindTooltip('<h4>Wilmington</h4>', {
            permanent: true,
            direction: 'center',
            className: 'my_label',
            offset: [0, 0]
        });
        marker.addTo(map);

        var marker = new L.marker([33.78339, -118.408621], { opacity: 0.01 }); //opacity may be set to zero
        marker.bindTooltip('<h4>Palos Verdes<br>Peninsula</h4>', {
            permanent: true,
            direction: 'center',
            className: 'my_label',
            offset: [0, 0]
        });
        marker.addTo(map);

        var marker = new L.marker([33.7445, -118.387], { opacity: 0.01 }); //opacity may be set to zero
        marker.bindTooltip('<h4>Rancho Palos<br>Verdes</h4>', {
            permanent: true,
            className: 'my_label',
            direction: 'center',
            offset: [0, 0]
        });
        marker.addTo(map);

        var marker = new L.marker([33.835237, -118.258691], { opacity: 0.01 }); //opacity may be set to zero
        marker.bindTooltip('<h4>Carson</h4>', {
            permanent: true,
            className: 'my_label',
            direction: 'center',
            offset: [0, 0]
        });
        marker.addTo(map);
    }
};
