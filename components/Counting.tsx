import React, { ReactNode, useEffect, useState } from 'react';

const easeOutQuint = (t: number) => 1 + (--t) * t * t * t * t;
const frameDuration = 1000 / 60;

interface CountUpAnimationProps {
	duration?: number;
	children: ReactNode;
}

const CountUpAnimation: React.FC<CountUpAnimationProps> = ( { children, duration = 2000 }: { children: React.ReactNode, duration?: number } ) => {
	let countTo = 0;
	if (typeof children === 'string') {
		countTo = parseInt(children, 10);
	}
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

		return () => clearInterval(counter);
    }, [countTo, duration] );

	return <span>{Math.floor( count )}</span>;
};

export default CountUpAnimation;