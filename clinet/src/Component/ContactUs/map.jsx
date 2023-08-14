import React, { useState } from 'react'
import NeshanMap from "@neshan-maps-platform/react-openlayers"
import "@neshan-maps-platform/react-openlayers/dist/style.css"
// import { NeshanMapRef, OlMap, Ol } from "@neshan-maps-platform/react-openlayers"

const map = () => {

    const [ol, setOl] = useState()
    const [olMap, setOlMap] = useState()


    const onInit = (ol, map) => {
        setOl(ol)

        var marker = new ol.Feature({
            geometry: new ol.geom.Point(
                ol.proj.fromLonLat([50.317869986394584, 33.23082587352604]) // جایی که میخواید براتون نشون بده
            ),
        });

        var myStyle = new ol.style.Style({
            image: new ol.style.Circle({
                radius: 7,
                fill: new ol.style.Fill({ color: 'red' }),
            })
        })
        var vectorSource = new ol.source.Vector({
            features: [marker]
        });
        var markerVectorLayer = new ol.layer.Vector({
            source: vectorSource,
            style: myStyle
        });
        map.addLayer(markerVectorLayer);

        setOlMap(map)


        setTimeout(() => {
            const view = map.getView()
            view.animate({
                center: ol.proj.fromLonLat([50.317869986394584, 33.23082587352604]),
                zoom: 16,
                duration: 1000,
            })

        }, 2000)


    }

    return (
        <NeshanMap
            mapKey="web.1fed1a780eed4743b6a73d84f979e7fc"
            center={{ latitude: 33.23082587352604, longitude: 50.317869986394584 }}
            // style={{ height: "20rem", width: "20rem }}
            defaultType="standard-night"
            poi={true}
            onInit={onInit}
            zoom={12}
            className="tw-absolute tw-w-full tw-h-full tw-object-cover"
        />
    )
}


export default map