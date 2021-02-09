import React, {useEffect, useState} from 'react'

// custom hook

const PREFIX = 'codepen-clone' // 구분


function useLocalStorage(key, initialValue) {

    const prefixedKey = PREFIX + key;

    const [value, setValue] = useState(() => {
        const jsonValue = localStorage.getItem(prefixedKey)  //로컬스토리지에 값이 있는지 확인
        if (jsonValue != null) return JSON.parse(jsonValue) 

        if (typeof initialValue === 'function') {
            return initialValue()
        } else {
            return initialValue
        }
    })
    useEffect(() => {
        localStorage.setItem(prefixedKey, JSON.stringify(value)) // codepen-clone html -> 'code'  이런식으로 로컬스토리지에 저장
    }, [prefixedKey, value])

    return [value, setValue]
}

export default useLocalStorage
