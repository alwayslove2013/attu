import React from 'react';
import { IconsType } from './Types';
import SearchIcon from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/Add';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import DeleteIcon from '@material-ui/icons/Delete';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import ClearIcon from '@material-ui/icons/Clear';
import ReorderIcon from '@material-ui/icons/Reorder';
import AppsIcon from '@material-ui/icons/Apps';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CancelIcon from '@material-ui/icons/Cancel';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import RefreshIcon from '@material-ui/icons/Refresh';
import FilterListIcon from '@material-ui/icons/FilterList';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import DatePicker from '@material-ui/icons/Event';
import GetAppIcon from '@material-ui/icons/GetApp';
// import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import PersonOutlineIcon from '@material-ui/icons/Person';
import { SvgIcon } from '@material-ui/core';
import { ReactComponent as ZillizIcon } from '../../assets/icons/attu.svg';
import { ReactComponent as OverviewIcon } from '../../assets/icons/overview.svg';
import { ReactComponent as CollectionIcon } from '../../assets/icons/collecion.svg';
import { ReactComponent as ConsoleIcon } from '../../assets/icons/console.svg';
import { ReactComponent as InfoIcon } from '../../assets/icons/info.svg';
import { ReactComponent as ReleaseIcon } from '../../assets/icons/release.svg';
import { ReactComponent as LoadIcon } from '../../assets/icons/load.svg';
import { ReactComponent as KeyIcon } from '../../assets/icons/key.svg';
import { ReactComponent as UploadIcon } from '../../assets/icons/upload.svg';
import { ReactComponent as VectorSearchIcon } from '../../assets/icons/nav-search.svg';
import { ReactComponent as SearchEmptyIcon } from '../../assets/icons/search.svg';
import { ReactComponent as CopyIcon } from '../../assets/icons/copy.svg';
import { ReactComponent as SystemIcon } from '../../assets/icons/system.svg';

const icons: { [x in IconsType]: (props?: any) => React.ReactElement } = {
  search: (props = {}) => <SearchIcon {...props} />,
  add: (props = {}) => <AddIcon {...props} />,
  addOutline:  (props = {}) => <AddCircleOutlineIcon {...props} />,
  delete: (props = {}) => <DeleteIcon {...props} />,
  list: (props = {}) => <ReorderIcon {...props} />,
  copy: (props = {}) => <FileCopyIcon {...props} />,
  visible: (props = {}) => <Visibility {...props} />,
  invisible: (props = {}) => <VisibilityOff {...props} />,
  error: (props = {}) => <CancelIcon {...props} />,
  clear: (props = {}) => <ClearIcon {...props} />,
  more: (props = {}) => <MoreVertIcon {...props} />,
  app: (props = {}) => <AppsIcon {...props} />,
  success: (props = {}) => <CheckCircleIcon {...props} />,
  expandLess: (props = {}) => <ExpandLess {...props} />,
  expandMore: (props = {}) => <ExpandMore {...props} />,
  back: (props = {}) => <ArrowBackIosIcon {...props} />,
  logout: (props = {}) => <ExitToAppIcon {...props} />,
  rightArrow: (props = {}) => <ArrowForwardIosIcon {...props} />,
  remove: (props = {}) => <RemoveCircleOutlineIcon {...props} />,
  dropdown: (props = {}) => <ArrowDropDownIcon {...props} />,
  refresh: (props = {}) => <RefreshIcon {...props} />,
  filter: (props = {}) => <FilterListIcon {...props} />,
  alias: (props = {}) => <AlternateEmailIcon {...props} />,
  datePicker: (props = {}) => <DatePicker {...props} />,
  download: (props = {}) => <GetAppIcon {...props} />,

  zilliz: (props = {}) => (
    <SvgIcon viewBox="0 0 36 36" component={ZillizIcon} {...props} />
  ),
  navPerson: (props = {}) => (
    <SvgIcon
      viewBox="0 0 24 24"
      component={PersonOutlineIcon}
      strokeWidth="2"
      {...props}
    />
  ),
  navOverview: (props = {}) => (
    <SvgIcon viewBox="0 0 20 20" component={OverviewIcon} {...props} />
  ),
  navCollection: (props = {}) => (
    <SvgIcon viewBox="0 0 20 20" component={CollectionIcon} {...props} />
  ),
  navConsole: (props = {}) => (
    <SvgIcon viewBox="0 0 20 20" component={ConsoleIcon} {...props} />
  ),
  navSearch: (props = {}) => (
    <SvgIcon viewBox="0 0 20 20" component={VectorSearchIcon} {...props} />
  ),
  navSystem: (props = {}) => (
    <SvgIcon viewBox="0 0 20 20" component={SystemIcon} {...props} />
  ),
  info: (props = {}) => (
    <SvgIcon viewBox="0 0 16 16" component={InfoIcon} {...props} />
  ),
  release: (props = {}) => (
    <SvgIcon viewBox="0 0 16 16" component={ReleaseIcon} {...props} />
  ),
  load: (props = {}) => (
    <SvgIcon viewBox="0 0 24 24" component={LoadIcon} {...props} />
  ),
  key: (props = {}) => (
    <SvgIcon viewBox="0 0 16 16" component={KeyIcon} {...props} />
  ),
  upload: (props = {}) => (
    <SvgIcon viewBox="0 0 16 16" component={UploadIcon} {...props} />
  ),
  vectorSearch: (props = {}) => (
    <SvgIcon viewBox="0 0 48 48" component={SearchEmptyIcon} {...props} />
  ),
  copyExpression: (props = {}) => (
    <SvgIcon viewBox="0 0 16 16" component={CopyIcon} {...props} />
  ),
  source: (props = {}) => (
    <SvgIcon viewBox="0 0 24 24" {...props}>
      <path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-6 10H6v-2h8v2zm4-4H6v-2h12v2z"></path>
    </SvgIcon>
  ),
};

export default icons;
