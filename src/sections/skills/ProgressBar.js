import React, {useEffect} from 'react'
import { useInView } from 'react-intersection-observer'
import "./skills.scss"

export default function ProgressBar({label, percent}) {
    const [value, setValue] = React.useState(0);
    useEffect(() => {
      setValue(percent);
    }, [percent]);

    const { ref, inView } = useInView({
      /* Optional options */
      threshold: 0,
    });

    return (
      <div ref={ref}>
        <div className="bar">
          <span className="bar-label">{label}</span>
          <span className="bar-fill" style={inView ? { width: `${value}%` } : { width: "0%"} }/>
        </div>
      </div>
    );
}
