import axios from 'axios'
import {
  TENANT_LIST_REQUEST,
  TENANT_LIST_SUCCESS,
  TENANT_LIST_FAIL,
  TENANT_DETAILS_REQUEST,
  TENANT_DETAILS_SUCCESS,
  TENANT_DETAILS_FAIL,
  TENANT_DELETE_SUCCESS,
  TENANT_DELETE_REQUEST,
  TENANT_DELETE_FAIL,
  TENANT_CREATE_REQUEST,
  TENANT_CREATE_SUCCESS,
  TENANT_CREATE_FAIL,
  TENANT_UPDATE_REQUEST,
  TENANT_UPDATE_SUCCESS,
  TENANT_UPDATE_FAIL,
} from '../constants/tenantConstants'
import { logout } from './userActions'

export const listTenants = (keyword = '', pageNumber = '', category = '') => async (
  dispatch
) => {
  try {
    dispatch({ type: TENANT_LIST_REQUEST })

    const { data } = await axios.get(
      `/api/tenants?keyword=${keyword}&pageNumber=${pageNumber}&category=${category}`
    )

    dispatch({
      type: TENANT_LIST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: TENANT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const listTenantDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: TENANT_DETAILS_REQUEST })

    const { data } = await axios.get(`/api/tenants/${id}`)

    dispatch({
      type: TENANT_DETAILS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: TENANT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const deleteTenant = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: TENANT_DELETE_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    await axios.delete(`/api/tenants/${id}`, config)

    dispatch({
      type: TENANT_DELETE_SUCCESS,
    })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    if (message === 'Not authorized, token failed') {
      dispatch(logout())
    }
    dispatch({
      type: TENANT_DELETE_FAIL,
      payload: message,
    })
  }
}

export const createTenant = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: TENANT_CREATE_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.post(`/api/tenants`, {}, config)

    dispatch({
      type: TENANT_CREATE_SUCCESS,
      payload: data,
    })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    if (message === 'Not authorized, token failed') {
      dispatch(logout())
    }
    dispatch({
      type: TENANT_CREATE_FAIL,
      payload: message,
    })
  }
}

export const updateTenant = (tenant) => async (dispatch, getState) => {
  try {
    dispatch({
      type: TENANT_UPDATE_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.put(
      `/api/tenants/${tenant._id}`,
      tenant,
      config
    )

    dispatch({
      type: TENANT_UPDATE_SUCCESS,
      payload: data,
    })
    dispatch({ type: TENANT_DETAILS_SUCCESS, payload: data })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    if (message === 'Not authorized, token failed') {
      dispatch(logout())
    }
    dispatch({
      type: TENANT_UPDATE_FAIL,
      payload: message,
    })
  }
}


