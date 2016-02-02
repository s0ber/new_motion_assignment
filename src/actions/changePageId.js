import {CHANGE_PAGE_ID} from 'actions'

export default function(pageId) {
  return {
    type: CHANGE_PAGE_ID,
    payload: pageId
  }
}
