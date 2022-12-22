import {
    TENANT_LIST_REQUEST,
    TENANT_LIST_SUCCESS,
    TENANT_LIST_FAIL,
    TENANT_DETAILS_REQUEST,
    TENANT_DETAILS_SUCCESS,
    TENANT_DETAILS_FAIL,
    TENANT_DELETE_REQUEST,
    TENANT_DELETE_SUCCESS,
    TENANT_DELETE_FAIL,
    TENANT_CREATE_RESET,
    TENANT_CREATE_FAIL,
    TENANT_CREATE_SUCCESS,
    TENANT_CREATE_REQUEST,
    TENANT_UPDATE_REQUEST,
    TENANT_UPDATE_SUCCESS,
    TENANT_UPDATE_FAIL,
    TENANT_UPDATE_RESET,

  } from '../constants/tenantConstants'
  
  export const tenantListReducer = (state = { tenants: [] }, action) => {
    switch (action.type) {
      case TENANT_LIST_REQUEST:
        return { loading: true, tenants: [] }
      case TENANT_LIST_SUCCESS:
        return {
          loading: false,
          tenants: action.payload.tenants,
          pages: action.payload.pages,
          page: action.payload.page,
        }
      case TENANT_LIST_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }
  
  export const tenantDetailsReducer = (
    state = { tenant: { reviews: [] } },
    action
  ) => {
    switch (action.type) {
      case TENANT_DETAILS_REQUEST:
        return { ...state, loading: true }
      case TENANT_DETAILS_SUCCESS:
        return { loading: false, tenant: action.payload }
      case TENANT_DETAILS_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }
  
  export const tenantDeleteReducer = (state = {}, action) => {
    switch (action.type) {
      case TENANT_DELETE_REQUEST:
        return { loading: true }
      case TENANT_DELETE_SUCCESS:
        return { loading: false, success: true }
      case TENANT_DELETE_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }
  
  export const tenantCreateReducer = (state = {}, action) => {
    switch (action.type) {
      case TENANT_CREATE_REQUEST:
        return { loading: true }
      case TENANT_CREATE_SUCCESS:
        return { loading: false, success: true, tenant: action.payload }
      case TENANT_CREATE_FAIL:
        return { loading: false, error: action.payload }
      case TENANT_CREATE_RESET:
        return {}
      default:
        return state
    }
  }
  
  export const tenantUpdateReducer = (state = { tenant: {} }, action) => {
    switch (action.type) {
      case TENANT_UPDATE_REQUEST:
        return { loading: true }
      case TENANT_UPDATE_SUCCESS:
        return { loading: false, success: true, tenant: action.payload }
      case TENANT_UPDATE_FAIL:
        return { loading: false, error: action.payload }
      case TENANT_UPDATE_RESET:
        return { TENANT: {} }
      default:
        return state
    }
  }
  

  