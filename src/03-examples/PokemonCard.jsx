

export const PokemonCard = ({ id, name, sprite }) => {
    return (
        <section>
            <h2 className="text-capitalize mt-2">{ id } - { name }</h2>
            <img src={ sprite } />
        </section>
    )
}
