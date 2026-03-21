import { Box, List } from "@mui/material";
import { useSelector } from "react-redux";
import useLocales from "src/common/hooks/useLocales";
import {
  policiesSelector,
  rulesSelector,
} from "../../../../auth/login/login.slice";
import {
  ActionAbility,
  NavListItem,
  NavSectionProps,
  Resource,
} from "../../../constants/common.interfaces";
import Can from "../../../lib/Can";
import NavList from "./NavList";
import { ListSubheaderStyle } from "./style";

// Define styles for menu items and sub-items

export default function NavSectionVertical({
  navConfig,
  isCollapse = false,
  ...other
}: NavSectionProps) {
  const { translate } = useLocales();
  const policies = useSelector(policiesSelector);
  const rules = useSelector(rulesSelector);

  // Check if the account has full permissions
  const isFullPermission = policies?.isRootAccount;

  return (
    <Box {...other}>
      {navConfig.map((group) => (
        <List key={group.subheader} disablePadding sx={{ px: 2 }}>
          <ListSubheaderStyle
            sx={{
              ...(isCollapse && {
                opacity: 0,
              }),
            }}
          >
            {translate(group.subheader)}
          </ListSubheaderStyle>

          {group.items.map((list, index) => {
            return (
              <NavList
                key={list.title + list.path}
                data={list}
                depth={1}
                hasChildren={!!list.children}
                isCollapse={isCollapse}
              />
            );
          })}
        </List>
      ))}
    </Box>
  );
}
