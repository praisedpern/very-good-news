import { useState } from 'react'

const Sorter = () => {
    const [radioObj, setRadioObj] = useState({
        created_at: true,
        comment_count: false,
        votes: false,
    })

    const radioObjHelper = (propToChange) => {
        setRadioObj((oldRadioObj) => {
            const newRadioObj = { ...oldRadioObj }
            for (const property in newRadioObj) {
                newRadioObj[property] = false
            }
            newRadioObj[propToChange] = true
            return newRadioObj
        })
    }

    return (
        <section className="App-sorter">
            Sort by
            <input
                name="sort_by"
                value="created_at"
                type="radio"
                checked={radioObj.created_at}
                onChange={() => {
                    radioObjHelper('created_at')
                }}
            />
            <label htmlFor="created_at">created_at</label>
            <input
                name="sort_by"
                value="comment_count"
                type="radio"
                checked={radioObj.comment_count}
                onChange={() => {
                    radioObjHelper('comment_count')
                }}
            />
            <label htmlFor="comment_count">comment_count</label>
            <input
                name="sort_by"
                value="votes"
                type="radio"
                checked={radioObj.votes}
                onChange={() => {
                    radioObjHelper('votes')
                }}
            />
            <label htmlFor="votes">votes </label>
            <button onClick={()=>{
                console.log(radioObj)
            }
            }>Asc</button> <button>Desc</button>
        </section>
    )
}

export default Sorter
