import React, { useEffect, useState } from 'react';

const easeOutQuint = (t: number) => 1 + (--t) * t * t * t * t;
const frameDuration = 1000 / 60;

const CountUpAnimation = ( { children, duration = 2000 } ) => {
	const countTo = parseInt( children, 10 );
	const [ count, setCount ] = useState( 0 );

	useEffect( () => {
		let frame = 0;
		const totalFrames = Math.round( duration / frameDuration );
		const counter = setInterval( () => {
			frame++;
			const progress = easeOutQuint( frame / totalFrames );
			setCount( countTo * progress );

			if ( frame === totalFrames ) {
				clearInterval( counter );
			}
		}, frameDuration );
	}, [] );

	return Math.floor( count );
};

export default CountUpAnimation;