import React, {useEffect} from "react";
import { useLocation, useHistory } from "react-router-dom";
//import { Pagination } from "react-bootstrap";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";

const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        marginTop: theme.spacing(2),
      },
      display: 'flex',
      justifyContent: 'center',
  
    },
  }));

export default function NewPagination(props) {
    const classes = useStyles();
    const history = useHistory();
    const location = useLocation();
    var params = new URLSearchParams(location.pathname.slice(1));
    const [page, setPage] = React.useState(1);

    const handleChange = (event, value) => {
        params.delete("page");
        params.append("page", value);
        history.push(params.toString());
        setPage(value);
    };

    useEffect(() => {
        params.get('page') ? setPage(parseInt(params.get('page')) ) : setPage(1)
    }, [location])

    
    
    return(
        <div className={classes.root}>
        <Pagination
          size = 'large'
          count={Math.floor(props.total / 30)}
          page={page}
          onChange={handleChange}
          variant="outlined"
        />
      </div>
    );

}
