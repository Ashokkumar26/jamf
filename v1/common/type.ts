export type AuthT = {
  auth: {
    domain: string;
    username: string;
    password: string;
  };
};

export interface GetMobileDevices {
  mobile_devices: MobileDevice[];
}

export interface MobileDevice {
  id: number;
  name: string;
  device_name: string;
  udid: string;
  serial_number: string;
  phone_number: string;
  wifi_mac_address: string;
  managed: boolean;
  supervised: boolean;
  model: string;
  model_identifier: string;
  modelDisplay: string;
  model_display: string;
  username: string;
}
export interface UserGroupByName {
  user_group: UserGroup;
}

export interface UserGroup {
  id: number;
  name: string;
  is_smart: boolean;
  is_notify_on_change: boolean;
  site: Site;
  criteria: any[];
  users: User[];
}

export interface Site {
  id: number;
  name: string;
}

export interface User {
  id: number;
  username: string;
  full_name: string;
  phone_number: string;
  email_address: string;
}
export interface getMobileDeviceName {
  mobile_device: MobileDevice;
}

export interface MobileDevice {
  general: General;
  location: Location;
  purchasing: Purchasing;
  applications: any[];
  security: Security;
  network: Network;
  certificates: any[];
  configuration_profiles: any[];
  provisioning_profiles: any[];
  mobile_device_groups: MobileDeviceGroup[];
  extension_attributes: any[];
}

export interface General {
  id: number;
  display_name: string;
  device_name: string;
  name: string;
  asset_tag: string;
  last_inventory_update: string;
  last_inventory_update_epoch: number;
  last_inventory_update_utc: string;
  capacity: number;
  capacity_mb: number;
  available: number;
  available_mb: number;
  percentage_used: number;
  os_type: string;
  os_version: string;
  os_build: string;
  serial_number: string;
  udid: string;
  initial_entry_date_epoch: number;
  initial_entry_date_utc: string;
  phone_number: string;
  ip_address: string;
  wifi_mac_address: string;
  bluetooth_mac_address: string;
  modem_firmware: string;
  model: string;
  model_identifier: string;
  model_number: string;
  modelDisplay: string;
  model_display: string;
  device_ownership_level: string;
  enrollment_method: string;
  last_enrollment_epoch: number;
  last_enrollment_utc: string;
  mdm_profile_expiration_epoch: number;
  mdm_profile_expiration_utc: string;
  managed: boolean;
  supervised: boolean;
  exchange_activesync_device_identifier: string;
  shared: string;
  diagnostic_submission: string;
  app_analytics: string;
  tethered: string;
  battery_level: number;
  ble_capable: boolean;
  device_locator_service_enabled: boolean;
  do_not_disturb_enabled: boolean;
  cloud_backup_enabled: boolean;
  last_cloud_backup_date_epoch: number;
  last_cloud_backup_date_utc: string;
  location_services_enabled: boolean;
  itunes_store_account_is_active: boolean;
  last_backup_time_epoch: number;
  last_backup_time_utc: string;
  site: Site;
}

export interface Site {
  id: number;
  name: string;
}

export interface Location {
  username: string;
  realname: string;
  real_name: string;
  email_address: string;
  position: string;
  phone: string;
  phone_number: string;
  department: string;
  building: string;
  room: string;
}

export interface Purchasing {
  is_purchased: boolean;
  is_leased: boolean;
  po_number: string;
  vendor: string;
  applecare_id: string;
  purchase_price: string;
  purchasing_account: string;
  po_date: string;
  po_date_epoch: number;
  po_date_utc: string;
  warranty_expires: string;
  warranty_expires_epoch: number;
  warranty_expires_utc: string;
  lease_expires: string;
  lease_expires_epoch: number;
  lease_expires_utc: string;
  life_expectancy: number;
  purchasing_contact: string;
  attachments: any[];
}

export interface Security {
  data_protection: boolean;
  block_level_encryption_capable: boolean;
  file_level_encryption_capable: boolean;
  passcode_present: boolean;
  passcode_compliant: boolean;
  passcode_compliant_with_profile: boolean;
  passcode_lock_grace_period_enforced: string;
  hardware_encryption: number;
  activation_lock_enabled: boolean;
  jailbreak_detected: string;
  lost_mode_enabled: string;
  lost_mode_enforced: boolean;
  lost_mode_enable_issued_epoch: number;
  lost_mode_enable_issued_utc: string;
  lost_mode_message: string;
  lost_mode_phone: string;
  lost_mode_footnote: string;
  lost_location_epoch: number;
  lost_location_utc: string;
  lost_location_latitude: number;
  lost_location_longitude: number;
  lost_location_altitude: number;
  lost_location_speed: number;
  lost_location_course: number;
  lost_location_horizontal_accuracy: number;
  lost_location_vertical_accuracy: number;
}

export interface Network {
  home_carrier_network: string;
  cellular_technology: string;
  voice_roaming_enabled: string;
  imei: string;
  iccid: string;
  meid: string;
  current_carrier_network: string;
  carrier_settings_version: string;
  current_mobile_country_code: string;
  current_mobile_network_code: string;
  home_mobile_country_code: string;
  home_mobile_network_code: string;
  data_roaming_enabled: boolean;
  roaming: boolean;
  phone_number: string;
}

export interface MobileDeviceGroup {
  id: number;
  name: string;
}
export interface CreateUserGroup {
  name: string;
  is_smart: string;
  is_notify_on_change?: string;
  username?: string;
}
