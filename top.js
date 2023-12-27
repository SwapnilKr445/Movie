import styles from "./styles.css";

const Top = ({searchW}) =>{
    return(
        <nav className={styles.nav1}>
            <p>MOVIES</p>
            <div className={styles.inputW}>
                <input
                    type="text"
                    placeholder="Enter Movie name..."
                    onChange={(e) => searchW(e.target.value)}
                    />
                    {/* /hello */}
           </div>
        </nav>
        
    );
};

export default Top;