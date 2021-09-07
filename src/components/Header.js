import { AppBar, makeStyles, Toolbar } from "@material-ui/core"
import { CallMissedSharp } from "@material-ui/icons"
import { useState } from "react"
import logo from "../imagenes/logoHotel.png"

const Header = () => {
    const [mobile, setMobile] = useState(false)
    const classes = useStyle()
    const displayMobile = () => {}
    const displayDesktop = () => (
            <Toolbar className={ classes.toolbar }>
                <img src={logo} className={ classes.logo } />
            </Toolbar>
    )
    
    return(
        <AppBar>
            {
            mobile ? displayMobile() : displayDesktop()
            }
        </AppBar>
    )
}

const useStyle = makeStyles((theme) => ({
    toolbar: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
    logo: {
        height: "180px",
        margin: theme.spacing(1,0,1,0),
        objectFit: "contain",
    }
}))

export default Header