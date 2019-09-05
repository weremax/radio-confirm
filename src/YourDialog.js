import React from 'react';
import PropTypes from 'prop-types';
import { confirmable } from 'react-confirm';
import Dialog from '@material-ui/core/Dialog'; // your choice.
 
const YourDialog = ({show, proceed, dismiss, cancel, confirmation, options}) => {
    console.log({show, proceed, dismiss, cancel, confirmation, options});
    return(
        <Dialog onHide={dismiss} open={show}>
            {confirmation}
            <button onClick={() => cancel('cancel')}>No</button>
            <button onClick={() => proceed('proceed')}>Yes</button>
        </Dialog>
    )
}
 
YourDialog.propTypes = {
  show: PropTypes.bool,            // from confirmable. indicates if the dialog is shown or not.
  proceed: PropTypes.func,         // from confirmable. call to close the dialog with promise resolved.
  cancel: PropTypes.func,          // from confirmable. call to close the dialog with promise rejected.
  dismiss: PropTypes.func,         // from confirmable. call to only close the dialog.
  confirmation: PropTypes.string,  // arguments of your confirm function
  options: PropTypes.object        // arguments of your confirm function
}
 
// confirmable HOC pass props `show`, `dismiss`, `cancel` and `proceed` to your component.
export default confirmable(YourDialog);
 
// or, use `confirmable` as decorator
//@confirmable
//class YourDialog extends React.Component {
//}