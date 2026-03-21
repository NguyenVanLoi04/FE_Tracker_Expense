// routes
import { PATH_DASHBOARD } from "../../../routes/paths";
// components
import Iconify from "src/common/components/Iconify";
import { BREADCUMBS } from "src/common/constants/common.constants";
import i18n from "src/common/locales/i18n";
import SvgIconStyle from "../../../components/SvgIconStyle";
import {
  Action,
  ActionAbility,
  Resource,
} from "../../../constants/common.interfaces";
import vn from "../../../locales/vn";

// ----------------------------------------------------------------------

const getIcon = (name: string) => (
  <SvgIconStyle
    src={`/assets/icons/navbar/${name}.svg`}
    sx={{ width: 1, height: 1 }}
  />
);

const ICONS = {
  subject: getIcon("ic_news_subject"),
  blog: getIcon("ic_blog"),
  cart: getIcon("ic_cart"),
  chat: getIcon("ic_chat"),
  mail: getIcon("ic_mail"),
  user: getIcon("ic_user"),
  kanban: getIcon("ic_kanban"),
  banking: getIcon("ic_banking"),
  booking: getIcon("ic_booking"),
  invoice: getIcon("ic_invoice"),
  calendar: getIcon("ic_calendar"),
  ecommerce: getIcon("ic_ecommerce"),
  analytics: getIcon("ic_analytics"),
  dashboard: getIcon("ic_dashboard"),
  menuItem: getIcon("ic_menu_item"),
  setting: getIcon("ic_menu_item"),
  policy: getIcon("ic_policy"),
  document: getIcon("ic_policy"),
  storeInMap: getIcon("ic_store_in_map"),
  product: <Iconify icon="fluent-mdl2:product-variant" />,
  order: <Iconify icon="icon-park-outline:transaction-order" />,
  attribute: <Iconify icon="carbon:carbon-for-ibm-product" />,
  term: <Iconify icon="fluent:task-list-square-add-20-regular" />,
  variant: <Iconify icon="fluent-mdl2:product-release" />,
  config: <Iconify icon="eos-icons:configuration-file-outlined" />,
  point: <Iconify icon="teenyicons:ms-powerpoint-solid" />,
  survey: <Iconify icon="wpf:survey" />,
  popup: <Iconify icon="entypo:popup" />,
  manageAgent: <Iconify icon="wpf:administrator" />,
  userManage: <Iconify icon="mdi:user-box" />,
  category: <Iconify icon="bxs:category-alt" />,
  tag: <Iconify icon="mingcute:tag-line" />,
  homeScreen: <Iconify icon="gg:home-screen" />,
  tierRank: <Iconify icon="fa6-solid:ranking-star" />,
  notification: <Iconify icon="mdi:notification-settings" />,
  wheel: <Iconify icon="mdi:dharma-wheel" />,
  homeSetting: <Iconify icon="ep:setting" />,
  history: <Iconify icon="material-symbols:history-rounded" />,
  store: <Iconify icon="ic:sharp-store-mall-directory" />,
  giftOrder: <Iconify icon="ph:gift-bold" />,
  historyScan: <Iconify icon="mdi:magnify-scan" />,
  configFeature: getIcon("ic_config_event"),
  game: <Iconify icon="ion:game-controller" />,
  feedback: <Iconify icon="fluent:person-feedback-28-regular" />,

  news: <Iconify icon="fluent:news-28-regular" />,
};

const navConfig = [
  {
    subheader: "app",
    items: [
      {
        action: Action.READ,
        resource: Resource.AGENT,
        actionAbility: ActionAbility.CAN,
        title: BREADCUMBS.AGENT_MANAGEMENT,
        path: PATH_DASHBOARD.agentManage.root,
        icon: ICONS.user,
        children: [
          {
            title: BREADCUMBS.AGENT_LIST,
            path: PATH_DASHBOARD.agentManage.list,
          },
        ],
      },
      {
        action: Action.READ,
        resource: Resource.CUSTOMER,
        actionAbility: ActionAbility.CAN,
        title: BREADCUMBS.USER_MANAGEMENT,
        path: PATH_DASHBOARD.userManagement.root,
        icon: ICONS.user,
        children: [
          {
            title: BREADCUMBS.USER_LIST,
            path: PATH_DASHBOARD.userManagement.list,
          },
        ],
      },
      {
        action: Action.READ,
        resource: Resource.ADD_POINT_CODE,
        actionAbility: ActionAbility.CAN,
        title: BREADCUMBS.CATEGORY_MANAGEMENT,
        path: PATH_DASHBOARD.category.root,
        icon: ICONS.category,
        children: [
          {
            action: Action.READ,
            resource: Resource.AGENT,
            actionAbility: ActionAbility.CAN,
            title: BREADCUMBS.CATEGORY_LIST,
            path: PATH_DASHBOARD.category.list,
          },
        ],
      },
      {
        action: Action.READ,
        resource: Resource.ADD_POINT_CODE,
        actionAbility: ActionAbility.CAN,
        title: BREADCUMBS.STATISTICAL_MANAGEMENT,
        path: PATH_DASHBOARD.statistic.root,
        icon: ICONS.analytics,
        children: [
          {
            action: Action.READ,
            resource: Resource.AGENT,
            actionAbility: ActionAbility.CAN,
            title: BREADCUMBS.STATISTICAL_USER,
            path: PATH_DASHBOARD.statistic.user,
          },
          {
            action: Action.READ,
            resource: Resource.AGENT,
            actionAbility: ActionAbility.CAN,
            title: BREADCUMBS.STATISTICAL_CATEGORY,
            path: PATH_DASHBOARD.statistic.category,
          },
        ],
      },
    ],
  },
];

export default navConfig;
