import styles from "./Tags.module.scss";
// import fotos from "../Galeria/fotos.json"; //outra forma de resetar o filtro

export default function Tags({ tags, filtraFotos, resetaFiltro /*, setItens */ }) {
    return (
        <div className={styles.tags}>
            <p>Filtre por tags:</p>
            <ul className={styles.tags__lista}>
                {tags.map((tag) => {
                    return (
                        <li key={tag} onClick={() => filtraFotos(tag)}> 
                            {tag} 
                        </li>
                    );
                })}
                <li onClick={resetaFiltro}>Todos</li>
                {/* <li onClick={() => {setItens(fotos)}}>Todas</li>  */}{/* outra forma de resetar o filtro */}
            </ul>
        </div>
    );
}
