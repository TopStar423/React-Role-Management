import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    Box,
    IconButton,
    Typography,
} from '@material-ui/core';
import { Close } from '@material-ui/icons';

type PropsType = {
    onConfirm: () => void
    onClose: () => void
}

const ConfirmDialog = ({ onConfirm, onClose }: PropsType) => {
    return (
        <Dialog open={true} maxWidth="sm" fullWidth>
            <DialogTitle>Confirm the action</DialogTitle>
            <Box position="absolute" top={0} right={0}>
                <IconButton>
                    <Close />
                </IconButton>
            </Box>
            <DialogContent>
                <Typography>Do you really want to delete the role?</Typography>
            </DialogContent>
            <DialogActions>
                <Button color="primary" variant="contained" onClick={onClose}>
                    Cancel
                </Button>
                <Button color="secondary" variant="contained" onClick={onConfirm}>
                    Confirm
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default ConfirmDialog;