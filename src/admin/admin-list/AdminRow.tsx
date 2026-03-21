import { Icon, MenuItem, Switch, TableCell, TableRow } from "@mui/material";
import dayjs from "dayjs";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Iconify from "src/common/components/Iconify";
import Image from "src/common/components/Image";
import { TableMoreMenu } from "src/common/components/table";
import { PATH_DASHBOARD } from "src/common/routes/paths";
import { replacePathParams } from "src/common/utils/replaceParams";

export default function AdminRow() {
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
      <TableCell>TheSHY</TableCell>
      <TableCell>Nguyễn Văn Lợi</TableCell>
      <TableCell>
        <Switch></Switch>
      </TableCell>
      <TableCell>{dayjs().format("DD/MM/YYYY HH:mm")}</TableCell>
      <TableCell>
        <TableMoreMenu
          open={openMenu}
          onOpen={handleOpenMenu}
          onClose={handleCloseMenu}
          actions={
            <>
              <MenuItem
                onClick={() => {
                  navigate(
                    replacePathParams(PATH_DASHBOARD.agentManage.detail, {
                      id: 1,
                    })
                  );
                }}
              >
                <Iconify
                  icon="eva:eye-fill"
                  onClick={() => {
                    navigate(
                      replacePathParams(PATH_DASHBOARD.agentManage.edit, {
                        id: 1,
                      })
                    );
                  }}
                />{" "}
                Xem chi tiết
              </MenuItem>
              <MenuItem>
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
