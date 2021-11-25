const Sorter = () => {
    return (
        <section className="App-sorter">
            Sort by
            <input name="sort_by" value="created_at" type="radio" />
            <label htmlFor="created_at">created_at</label>
            <input name="sort_by" value="comment_count" type="radio" />
            <label htmlFor="comment_count">comment_count</label>
            <input name="sort_by" value="votes" type="radio" />
            <label htmlFor="votes">votes </label>
            <button>Asc/Desc</button>
        </section>
    )
}

export default Sorter
