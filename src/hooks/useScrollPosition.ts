import { useEffect, useRef, useState } from 'react'
import _ from "lodash";


export default function useScrollPosition(YTrigger: number = 30) {
    const handlePosition = useRef(_.throttle((data) => {
        setTrigger((_.get(data, 'path[1].pageYOffset', window.pageYOffset) > YTrigger) ? false : true)
    }, 50, { trailing: true, leading: false }))

    window.addEventListener('scroll', handlePosition.current);
    useEffect(() => {
        return () => {
            window.removeEventListener("scroll", handlePosition.current)
        }
    }, [])
    const [trigger, setTrigger] = useState<boolean>(true)

    return { trigger }

}