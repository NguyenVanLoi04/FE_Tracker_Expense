import { Icon, MenuItem, Switch, TableCell, TableRow } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Iconify from "src/common/components/Iconify";
import Image from "src/common/components/Image";
import { TableMoreMenu } from "src/common/components/table";
import { PATH_DASHBOARD } from "src/common/routes/paths";
import { replacePathParams } from "src/common/utils/replaceParams";

export default function CategoryRow() {
  const navigate = useNavigate();
  const [openMenu, setOpenMenuActions] = useState<HTMLElement | null>(null);
  const handleOpenMenu = (category: React.MouseEvent<HTMLElement>) => {
    setOpenMenuActions(category.currentTarget);
  };

  const handleCloseMenu = () => {
    setOpenMenuActions(null);
  };
  return (
    <TableRow>
      <TableCell>1</TableCell>
      <TableCell>
        <Image
          src="https://storage.googleapis.com/vitadairy_public_dev/WEBAPP/images/131/14db479b-a779-4b81-a6f9-9b65aafa9521.jpg"
          alt="flag"
          sx={{ maxHeight: 50, maxWidth: 50, borderRadius: 1 }}
        />
      </TableCell>
      <TableCell>Công việc</TableCell>
      <TableCell>
        <Switch></Switch>
      </TableCell>
      <TableCell>
        <Switch></Switch>
      </TableCell>
      <TableCell>
        <TableMoreMenu
          open={openMenu}
          onOpen={handleOpenMenu}
          onClose={handleCloseMenu}
          actions={
            <>
              <MenuItem
                onClick={() =>
                  navigate(
                    replacePathParams(PATH_DASHBOARD.category.detail, { id: 1 })
                  )
                }
              >
                <Iconify icon="eva:eye-fill" /> Xem chi tiết
              </MenuItem>
              <MenuItem
                onClick={() =>
                  navigate(
                    replacePathParams(PATH_DASHBOARD.category.edit, { id: 1 })
                  )
                }
              >
                <Iconify icon="eva:edit-fill" /> Chỉnh sửa
              </MenuItem>
              <MenuItem>
                <Iconify sx={{ color: "red" }} icon="eva:trash-2-fill" /> Xóa
              </MenuItem>
            </>
          }
        ></TableMoreMenu>
      </TableCell>
    </TableRow>
  );
}
