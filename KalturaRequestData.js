// ===================================================================================================
//                           _  __     _ _
//                          | |/ /__ _| | |_ _  _ _ _ __ _
//                          | ' </ _` | |  _| || | '_/ _` |
//                          |_|\_\__,_|_|\__|\_,_|_| \__,_|
//
// This file is part of the Kaltura Collaborative Media Suite which allows users
// to do with audio, video, and animation what Wiki platfroms allow them to do with
// text.
//
// Copyright (C) 2006-2017  Kaltura Inc.
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as
// published by the Free Software Foundation, either version 3 of the
// License, or (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.
//
// @ignore
// ===================================================================================================

class RequestData {

	constructor() {
		this.requestData = {};
	}
	
	/**
	 * @param string clientTag
	 */
	setClientTag(clientTag){
		this.requestData['clientTag'] = clientTag;
	};
	
	/**
	 * @return string
	 */
	getClientTag(){
		return this.requestData['clientTag'];
	};
	
	/**
	 * @param string apiVersion
	 */
	setApiVersion(apiVersion){
		this.requestData['apiVersion'] = apiVersion;
	};
	
	/**
	 * @return string
	 */
	getApiVersion(){
		return this.requestData['apiVersion'];
	};
	
	/**
	 * Impersonated partner id
	 * 
	 * @param int partnerId
	 */
	setPartnerId(partnerId){
		this.requestData['partnerId'] = partnerId;
	};
	
	/**
	 * Impersonated partner id
	 * 
	 * @return int
	 */
	getPartnerId(){
		return this.requestData['partnerId'];
	};
	
	/**
	 * Impersonated user id
	 * 
	 * @param int userId
	 */
	setUserId(userId){
		this.requestData['userId'] = userId;
	};
	
	/**
	 * Impersonated user id
	 * 
	 * @return int
	 */
	getUserId(){
		return this.requestData['userId'];
	};
	
	/**
	 * Content language
	 * 
	 * @param string language
	 */
	setLanguage(language){
		this.requestData['language'] = language;
	};
	
	/**
	 * Content language
	 * 
	 * @return string
	 */
	getLanguage(){
		return this.requestData['language'];
	};
	
	/**
	 * Content currency
	 * 
	 * @param string currency
	 */
	setCurrency(currency){
		this.requestData['currency'] = currency;
	};
	
	/**
	 * Content currency
	 * 
	 * @return string
	 */
	getCurrency(){
		return this.requestData['currency'];
	};
	
	/**
	 * Kaltura API session
	 * 
	 * @param string ks
	 */
	setKs(ks){
		this.requestData['ks'] = ks;
	};
	
	/**
	 * Kaltura API session
	 * 
	 * @return string
	 */
	getKs(){
		return this.requestData['ks'];
	};
	
	/**
	 * Kaltura API session
	 * 
	 * @param string sessionId
	 */
	setSessionId(sessionId){
		this.requestData['ks'] = sessionId;
	};
	
	/**
	 * Kaltura API session
	 * 
	 * @return string
	 */
	getSessionId(){
		return this.requestData['ks'];
	};
	
}

class VolatileRequestData extends RequestData {

}

module.exports = {
	RequestData: RequestData,
	VolatileRequestData: VolatileRequestData,
};

