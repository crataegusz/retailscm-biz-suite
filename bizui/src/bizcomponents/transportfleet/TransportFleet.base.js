import React from 'react'
import { Icon,Divider, Avata, Card, Col} from 'antd'

import { Link } from 'dva/router'
import moment from 'moment'
import ImagePreview from '../../components/ImagePreview'
import appLocaleName from '../../common/Locale.tool'
import BaseTool from '../../common/Base.tool'
import GlobalComponents from '../../custcomponents'
import DescriptionList from '../../components/DescriptionList'
const { Description } = DescriptionList

const {
	defaultRenderReferenceCell,
	defaultRenderBooleanCell,
	defaultRenderMoneyCell,
	defaultRenderDateTimeCell,
	defaultRenderImageCell,
	defaultRenderAvatarCell,
	defaultRenderDateCell,
	defaultRenderIdentifier,
	defaultRenderTextCell,
	defaultSearchLocalData,
} = BaseTool

const renderTextCell=defaultRenderTextCell
const renderIdentifier=defaultRenderIdentifier
const renderDateCell=defaultRenderDateCell
const renderDateTimeCell=defaultRenderDateTimeCell
const renderImageCell=defaultRenderImageCell
const renderAvatarCell=defaultRenderAvatarCell
const renderMoneyCell=defaultRenderMoneyCell
const renderBooleanCell=defaultRenderBooleanCell
const renderReferenceCell=defaultRenderReferenceCell



const menuData = {menuName: window.trans('transport_fleet'), menuFor: "transportFleet",
  		subItems: [
  {name: 'transportTruckList', displayName: window.mtrans('transport_truck','transport_fleet.transport_truck_list',false), type:'transportTruck',icon:'truck',readPermission: false,createPermission: false,deletePermission: false,updatePermission: false,executionPermission: false, viewGroup: '__no_group'},
  {name: 'truckDriverList', displayName: window.mtrans('truck_driver','transport_fleet.truck_driver_list',false), type:'truckDriver',icon:'truck',readPermission: false,createPermission: false,deletePermission: false,updatePermission: false,executionPermission: false, viewGroup: '__no_group'},
  {name: 'transportTaskList', displayName: window.mtrans('transport_task','transport_fleet.transport_task_list',false), type:'transportTask',icon:'tasks',readPermission: false,createPermission: false,deletePermission: false,updatePermission: false,executionPermission: false, viewGroup: '__no_group'},
  
  		],
}


const settingMenuData = {menuName: window.trans('transport_fleet'), menuFor: "transportFleet",
  		subItems: [
  
  		],
}

const fieldLabels = {
  id: window.trans('transport_fleet.id'),
  name: window.trans('transport_fleet.name'),
  contactNumber: window.trans('transport_fleet.contact_number'),
  owner: window.trans('transport_fleet.owner'),
  lastUpdateTime: window.trans('transport_fleet.last_update_time'),

}

const displayColumns = [
  { title: fieldLabels.id, debugtype: 'string', dataIndex: 'id', width: '8', render: (text, record)=>renderTextCell(text,record,'transportFleet') , sorter: true },
  { title: fieldLabels.name, debugtype: 'string', dataIndex: 'name', width: '11',render: (text, record)=>renderTextCell(text,record)},
  { title: fieldLabels.contactNumber, debugtype: 'string', dataIndex: 'contactNumber', width: '16',render: (text, record)=>renderTextCell(text,record)},
  { title: fieldLabels.owner, dataIndex: 'owner', render: (text, record) => renderReferenceCell(text, record), sorter:true},
  { title: fieldLabels.lastUpdateTime, dataIndex: 'lastUpdateTime', render: (text, record) =>renderDateTimeCell(text,record), sorter: true},

]


const searchLocalData =(targetObject,searchTerm)=> defaultSearchLocalData(menuData,targetObject,searchTerm)

const renderItemOfList=(transportFleet, targetComponent, columCount)=>{
  const displayColumnsCount = columCount || 2
  const userContext = null
  return (
    <div key={transportFleet.id}>
	
      <DescriptionList  key={transportFleet.id} size="small" col="2" >
        <Description term={fieldLabels.id} style={{wordBreak: 'break-all'}}>{transportFleet.id}</Description> 
        <Description term={fieldLabels.name} style={{wordBreak: 'break-all'}}>{transportFleet.name}</Description> 
        <Description term={fieldLabels.contactNumber} style={{wordBreak: 'break-all'}}>{transportFleet.contactNumber}</Description> 
        <Description term={fieldLabels.lastUpdateTime}><div>{ moment(transportFleet.lastUpdateTime).format('YYYY-MM-DD HH:mm')}</div></Description> 
	
        
      </DescriptionList>
      <Divider style={{ height: '2px' }} />
    </div>
	)

}
	
const packFormValuesToObject = ( formValuesToPack )=>{
	const {name, contactNumber, ownerId} = formValuesToPack
	const owner = {id: ownerId, version: 2^31}
	const data = {name, contactNumber, owner}
	return data
}
const unpackObjectToFormValues = ( objectToUnpack )=>{
	const {name, contactNumber, owner} = objectToUnpack
	const ownerId = owner ? owner.id : null
	const data = {name, contactNumber, ownerId}
	return data
}
const stepOf=(targetComponent, title, content, position, index)=>{
	return {
		title,
		content,
		position,
		packFunction: packFormValuesToObject,
		unpackFunction: unpackObjectToFormValues,
		index,
      }
}
const TransportFleetBase={menuData,displayColumns,fieldLabels,renderItemOfList, stepOf, searchLocalData}
export default TransportFleetBase



