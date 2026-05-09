import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

import styles from "./loader.module.css";

export default function Loader() {
    return (
        <div className={styles.loading}>
            <Box sx={{ display: "flex" }}>
                <CircularProgress aria-label="Loading…" />
            </Box>
        </div>
    );
}
