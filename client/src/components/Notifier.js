import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
let openSnackbarFn;
 class Notifier extends React.Component {
  state = {
    open: false,
    message: '',
  };
   componentDidMount() {
    openSnackbarFn = this.openSnackbar;
  }
   openSnackbar = ({ message }) => {
    this.setState({
      open: true,
      message,
    });
  };
   handleSnackbarClose = () => {
    this.setState({
      open: false,
      message: '',
    });
  };
   render() {
    const message = (
      <span
        id="snackbar-message-id"
        dangerouslySetInnerHTML={{ __html: this.state.message }}
      />
    );
     const styles = {
        root: {
            background: 'red'
        }
    };
     const { classes } = this.props;
     return (
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        message={message}
        autoHideDuration={3000}
        onClose={this.handleSnackbarClose}
        open={this.state.open}
        snackbarcontentprops={{
          'aria-describedby': 'snackbar-message-id',
        }}
      />
    );
  }
}
 export function openSnackbar({ message }) {
    openSnackbarFn({ message })
  }
 export default Notifier; 