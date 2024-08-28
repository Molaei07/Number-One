import { 
  DashboardBtnIcon, 
  InformationBtnIcon, 
  MyCoursesBtnIcon,
  ReservedBtnIcon,
  MyViewsBtnIcon,
  FavoritesBtnIcon,
  SecurityBtnIcon
} from "../../icon";

export const sidebarButtons = [
  { id: 1, name: "داشبورد", href: "/userPanel", icon: DashboardBtnIcon },
  { id: 2, name: "اطلاعات کاربری", href: "/userPanel/information", icon: InformationBtnIcon },
  { id: 3, name: "دوره های من", href: "/userPanel/myCourses", icon: MyCoursesBtnIcon },
  { id: 4, name: "دوره های رزرو شده", href: "/userPanel/reserved", icon: ReservedBtnIcon },
  { id: 5, name: "دیدگاه های من", href: "/userPanel/myViews", icon: MyViewsBtnIcon },
  { id: 6, name: "علاقه مندی ها", href: "/userPanel/favorites", icon: FavoritesBtnIcon },
  { id: 7, name: "تنظیمات امنیتی", href: "/userPanel/security", icon: SecurityBtnIcon },
];
