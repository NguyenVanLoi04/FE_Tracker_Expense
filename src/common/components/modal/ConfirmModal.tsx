import { LoadingButton } from "@mui/lab";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export type ConfirmModalType = "delete" | "warning" | "success";

type ConfirmModalProps = {
  isOpen: boolean;
  onClose: VoidFunction;
  onSubmit: VoidFunction;
  type: ConfirmModalType;
  text: string;
  isLoading?: boolean;
};

const mapTypeToColor: Record<
  ConfirmModalType,
  | "error"
  | "success"
  | "inherit"
  | "primary"
  | "secondary"
  | "info"
  | "warning"
  | undefined
> = {
  delete: "error",
  warning: "warning",
  success: "primary",
};

export const ConfirmModal = (props: ConfirmModalProps) => {
  const { isOpen, onClose, onSubmit, type, text, isLoading } = props;
  const { t } = useTranslation();

  const [isConfirmed, setIsConfirmed] = useState(false);

  useEffect(() => {
    if (isConfirmed && !isLoading) {
      onClose();
    }
  }, [isConfirmed, isLoading]);

  return (
    <div>
      <Dialog
        open={isOpen}
        onClose={onClose}
        BackdropProps={{
          sx: { backgroundColor: "black!important", opacity: "0.2!important" },
        }}
        PaperProps={{
          sx: {
            boxShadow: 0,
          },
        }}
      >
        <DialogTitle id="alert-dialog-title">{text}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {t("confirmModal.content")}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="inherit" variant="contained">
            {t("confirmModal.cancel")}
          </Button>
          <LoadingButton
            onClick={() => {
              setIsConfirmed(true);
              onSubmit();
            }}
            color={mapTypeToColor[type]}
            autoFocus
            variant="contained"
            loading={isLoading}
          >
            {t("confirmModal.confirm")}
          </LoadingButton>
        </DialogActions>
      </Dialog>
    </div>
  );
};
