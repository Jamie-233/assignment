import axios from 'axios';
import { fromJS } from 'immutable';
import * as constants from './constants';

const changeList = (list) => ({
  type: constants.CHANGE_LIST,
  list
});

export const serachFocus = () => ({
  type: constants.SEARCH_FOCUS
});

export const searchBlur = () => ({
  type: constants.SEARCH_BLUR
});

export const showModal = () => ({
  type: constants.SHOW_MODAL
});

export const handleSubmit = (data) => ({
  type: constants.HANDLE_SUBMIT,
  list: fromJS(data)
})

export const handleCancel = () => ({
  type: constants.HANDLE_CANCEL
});

export const handleDelete = (item) => ({
  type: constants.HANDLE_DELETE,
  item
});

export const handleSearch = (keyword) => ({
  type: constants.HANDLE_SEARCH,
  keyword
});

export const ranDom = () => ({
  type: constants.CREATE_RANDOM
});

export const getList = () => {
  return (dispatch) => {
    axios.get('/api/product_list.json')
    .then(response => {
      const result = response.data.data;
      dispatch(changeList(result));
    })
  }
};
