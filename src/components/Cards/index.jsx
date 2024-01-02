import { Button, Card, CardContent, Typography } from "@mui/material"
import { Link } from "react-router-dom";
import FlagIcon from '@mui/icons-material/Flag';
import InterestsIcon from '@mui/icons-material/Interests';
import RadarIcon from '@mui/icons-material/Radar';
import ExtensionIcon from '@mui/icons-material/Extension';
import Style from './style.module.css';

export const ServicesCard = (props) => {

    const { title, content, url } = props;

    return (
        <Card
            elevation={5}
            sx={{
                width: {
                    xs: "80%",
                    sm: "40%",
                    md: "35%",
                    lg: "20%"
                },
                paddingBottom: "1rem",
                backgroundColor: "transparent",
                color:"white"
            }}
            className={Style.services_card}
        >
            <CardContent>
                <Typography variant="h6" sx={{ fontWeight: "bolder", textAlign: "center" }}>
                    {title}
                </Typography>
                <Typography variant="body2" sx={{ textAlign: "center" }}>
                    {content}
                </Typography>
            </CardContent>
            <div className="flex justify-center">
                {/* <Button size="small" variant="outlined"
                    sx={{
                        border: "none",
                        borderRadius: "1rem",
                        padding: "0.3rem 1rem",
                        color: "black",
                        fontWeight: "bolder",
                        textTransform: "capitalize"

                    }}> */}
                <Link to={url}>
                    Learn More
                </Link>
                {/* </Button> */}
            </div>
        </Card>
    )
}

export const AboutCard = (props) => {
    const { title, content } = props;

    return (
        <Card
            elevation={0}
            sx={{
                width: "15rem",
                borderRadius: "0.8rem",
                paddingBottom: "1rem",
            }}
        >
            <div style={{ backgroundColor: "var(--red)", display: "inline-block", padding: "0.5rem", margin: "1rem 0rem 0rem 1rem", borderRadius: "0.2rem" }}>
                {title === "Our Mission" && <RadarIcon sx={{ color: "white" }} />}
                {title === "Our Goal" && <FlagIcon sx={{ color: "white" }} />}
                {title === "Our Strategy" && <ExtensionIcon sx={{ color: "white" }} />}
                {title === "Social Proof" && <InterestsIcon sx={{ color: "white" }} />}
            </div>
            <CardContent>
                <Typography variant="h6" sx={{ fontWeight: "bolder" }}>
                    {title}
                </Typography>
                <Typography variant="body2">
                    {content}
                </Typography>
            </CardContent>
        </Card>
    )
}