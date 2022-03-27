import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import { useState } from 'react';
import getCenter from 'geolib/es/getCenter';

function Map({ searchResults }) {
	const [selectedLocation, setSelectedLocation] = useState({});

	const coordinates = searchResults.map((result) => ({
		longitude: result.long,
		latitude: result.lat,
	}));

	const center = getCenter(coordinates);

	const [viewport, setViewport] = useState({
		width: '100%',
		height: '100%',
		latitude: center.latitude,
		longitude: center.longitude,
		zoom: 11,
	});

	return (
		<ReactMapGL
			initialViewState={{
				longitude: -100,
				latitude: 40,
				zoom: 3.5,
			}}
			style={{ width: '100vw', height: '100vh' }}
			mapStyle='YOUR_STYLE_URL'
			mapboxAccessToken='YOUR_API_KEY'>
			{searchResults.map((result) => (
				<div key={result.img}>
					<Marker
						longitude={result.long}
						latitude={result.lat}
						offsetLeft={-20}
						offsetTop={-10}>
						<p
							role='img'
							onClick={() => setSelectedLocation(result)}
							className='cursor-pointer text-2xl animate-bounce'
							arial-label='push-pin'>
							📌
						</p>
					</Marker>

					{selectedLocation.long === result.long ? (
						<Popup
							onClose={() => setSelectedLocation({})}
							closeOnClick={true}
							latitude={result.latitude}
							longitude={result.longitude}>
							{result.title}
						</Popup>
					) : (
						false
					)}
				</div>
			))}
		</ReactMapGL>
	);
}

export default Map;
