function List(props) {

    const { images, isLoading } = props

    // if (!images || images.length === 0) return <p>Нет данных.</p>

    return (
        <div>
            {isLoading
                ? <h1>Подождите, данные загружаются!</h1>
                : images.map((image, index) =>
                        <img src={image} />
                  )
            }
      </div>
    )
}

export default List