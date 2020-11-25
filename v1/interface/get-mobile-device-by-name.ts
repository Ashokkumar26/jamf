interface outputSchema {
  mobile_device: {
    general: {
      /**
       * @examples [1]
       */
      id: number;
      /**
       * @examples ["iPhone 6s"]
       */
      display_name: string;
      /**
       * @examples ["iPhone 6s"]
       */
      device_name: string;
      /**
       * @examples ["iPhone 6s"]
       */
      name: string;
      /**
       * @examples ["string"]
       */
      asset_tag: string;
      /**
       * @examples ["Wednesday, November 18 2020 at 6:03 AM"]
       */
      last_inventory_update: string;
      /**
       * @examples [1499470624555]
       */
      last_inventory_update_epoch: number;
      /**
       * @examples ["2017-07-07T18:37:04.555-0500"]
       */
      last_inventory_update_utc: string;
      /**
       * @examples [12159]
       */
      capacity: number;
      /**
       * @examples [12159]
       */
      capacity_mb: number;
      /**
       * @examples [11259]
       */
      available: number;
      /**
       * @examples [11259]
       */
      available_mb: number;
      /**
       * @examples [5]
       */
      percentage_used: number;
      /**
       * @examples ["iOS"]
       */
      os_type: string;
      /**
       * @examples ["10.3.2"]
       */
      os_version: string;
      /**
       * @examples ["14F89"]
       */
      os_build: string;
      /**
       * @examples ["C02Q7KHTGFWF"]
       */
      serial_number: string;
      /**
       * @examples ["270aae10800b6e61a2ee2bbc285eb967050b5984"]
       */
      udid: string;
      /**
       * @examples [1499470624555]
       */
      initial_entry_date_epoch: number;
      /**
       * @examples ["2017-07-07T18:37:04.555-0500"]
       */
      initial_entry_date_utc: string;
      /**
       * @examples ["123-555-6789"]
       */
      phone_number: string;
      /**
       * @examples ["192.0.0.1"]
       */
      ip_address: string;
      /**
       * @examples ["E0:AC:CB:97:36:G4"]
       */
      wifi_mac_address: string;
      /**
       * @examples ["E0:AC:CB:97:36:G4"]
       */
      bluetooth_mac_address: string;
      /**
       * @examples ["2.61.00"]
       */
      modem_firmware: string;
      /**
       * @examples ["iPhone 6s"]
       */
      model: string;
      /**
       * @examples ["iPhone8,1"]
       */
      model_identifier: string;
      /**
       * @examples ["MKRY2LL"]
       */
      model_number: string;
      /**
       * @examples ["iPhone 6s"]
       */
      modelDisplay: string;
      /**
       * @examples ["iPhone 6s"]
       */
      model_display: string;
      /**
       * @examples ["Institutional"]
       */
      device_ownership_level: string;
      /**
       * @examples ["manual"]
       */
      enrollment_method: string;
      /**
       * @examples [1499470624555]
       */
      last_enrollment_epoch: number;
      /**
       * @examples ["2017-07-07T18:37:04.555-0500"]
       */
      last_enrollment_utc: string;
      /**
       * @examples [1499470624555]
       */
      mdm_profile_expiration_epoch: number;
      /**
       * @examples ["2017-07-07T18:37:04.555-0500"]
       */
      mdm_profile_expiration_utc: string;
      /**
       * @examples [true]
       */
      managed: boolean;
      /**
       * @examples [true]
       */
      supervised: boolean;
      /**
       * @examples ["TUCLLFJHPL779ACL9DCJQFN39F"]
       */
      exchange_activesync_device_identifier: string;
      /**
       * @examples ["string"]
       */
      shared: string;
      /**
       * @examples [""]
       */
      diagnostic_submission: string;
      /**
       * @examples [""]
       */
      app_analytics: string;
      /**
       * @examples ["string"]
       */
      tethered: string;
      /**
       * @examples [95]
       */
      battery_level: number;
      /**
       * @examples [true]
       */
      ble_capable: boolean;
      /**
       * @examples [true]
       */
      device_locator_service_enabled: boolean;
      /**
       * @examples [true]
       */
      do_not_disturb_enabled: boolean;
      /**
       * @examples [true]
       */
      cloud_backup_enabled: boolean;
      /**
       * @examples [1499470624555]
       */
      last_cloud_backup_date_epoch: number;
      /**
       * @examples ["2017-07-07T18:37:04.555-0500"]
       */
      last_cloud_backup_date_utc: string;
      /**
       * @examples [true]
       */
      location_services_enabled: boolean;
      /**
       * @examples [true]
       */
      itunes_store_account_is_active: boolean;
      /**
       * @examples [1499470624555]
       */
      last_backup_time_epoch: number;
      /**
       * @examples ["2017-07-07T18:37:04.555-0500"]
       */
      last_backup_time_utc: string;
      site: {
        /**
         * @examples [-1]
         */
        id: number;
        /**
         * @examples ["None"]
         */
        name: string;
      };
    };
    location: {
      /**
       * @examples ["JBetty"]
       */
      username: string;
      /**
       * @examples ["Betty Jackson"]
       */
      realname: string;
      /**
       * @examples ["Betty Jackson"]
       */
      real_name: string;
      /**
       * @examples ["jbetty@company.com"]
       */
      email_address: string;
      /**
       * @examples ["System Engineer"]
       */
      position: string;
      /**
       * @examples ["123-456-6789"]
       */
      phone: string;
      /**
       * @examples ["123-456-6789"]
       */
      phone_number: string;
      /**
       * @examples ["Sales Staff"]
       */
      department: string;
      /**
       * @examples ["New York Office"]
       */
      building: string;
      /**
       * @examples ["1175"]
       */
      room: string;
    };
    purchasing: {
      /**
       * @examples [true]
       */
      is_purchased: boolean;
      /**
       * @examples [true]
       */
      is_leased: boolean;
      /**
       * @examples ["567"]
       */
      po_number: string;
      /**
       * @examples ["Jhon"]
       */
      vendor: string;
      /**
       * @examples ["434"]
       */
      applecare_id: string;
      /**
       * @examples ["325"]
       */
      purchase_price: string;
      /**
       * @examples ["bettyj"]
       */
      purchasing_account: string;
      /**
       * @examples ["string"]
       */
      po_date: string;
      /**
       * @examples [0]
       */
      po_date_epoch: number;
      /**
       * @examples ["2018-01-29T14:18:02.000-0600"]
       */
      po_date_utc: string;
      /**
       * @examples ["November 18 2020 at 6:03 AM"]
       */
      warranty_expires: string;
      /**
       * @examples [0]
       */
      warranty_expires_epoch: number;
      /**
       * @examples ["2018-01-29T14:18:02.000-0600"]
       */
      warranty_expires_utc: string;
      /**
       * @examples ["November 18 2020 at 6:03 AM"]
       */
      lease_expires: string;
      /**
       * @examples [0]
       */
      lease_expires_epoch: number;
      /**
       * @examples ["2018-01-29T14:18:02.000-0600"]
       */
      lease_expires_utc: string;
      /**
       * @examples [0]
       */
      life_expectancy: number;
      /**
       * @examples ["Jhon"]
       */
      purchasing_contact: string;
      attachments: {
        /**
         * @examples [1]
         */
        id: number;
        /**
         * @examples ["ysl.pdf"]
         */
        filename: string;
        /**
         * @examples ["https://abcd.jamfcloud.com/attachment.html?id=1&o=r"]
         */
        uri: string;
      };
    }[];
  };
  applications: {
    /**
     * @examples [1]
     */
    size: number;
    application: {
      /**
       * @examples ["Self Service Mobile"]
       */
      application_name: string;
      /**
       * @examples ["10.1.1"]
       */
      application_version: string;
      /**
       * @examples ["com.jamfsoftware.selfservice"]
       */
      identifier: string;
    };
  }[];
  security: {
    /**
     * @examples [true]
     */
    data_protection: boolean;
    /**
     * @examples [true]
     */
    block_level_encryption_capable: boolean;
    /**
     * @examples [true]
     */
    file_level_encryption_capable: boolean;
    /**
     * @examples [true]
     */
    passcode_present: boolean;
    /**
     * @examples [true]
     */
    passcode_compliant: boolean;
    /**
     * @examples [true]
     */
    passcode_compliant_with_profile: boolean;
    /**
     * @examples ["Not Available"]
     */
    passcode_lock_grace_period_enforced: string;
    /**
     * @examples ["1"]
     */
    hardware_encryption: string;
    /**
     * @examples [true]
     */
    activation_lock_enabled: boolean;
    /**
     * @examples ["Normal"]
     */
    jailbreak_detected: string;
    /**
     * @examples [true]
     */
    lost_mode_enabled: boolean;
    /**
     * @examples [true]
     */
    lost_mode_enforced: boolean;
    /**
     * @examples [1517598768512]
     */
    lost_mode_enable_issued_epoch: number;
    /**
     * @examples ["2018-02-02T13:12:48.512-0600"]
     */
    lost_mode_enable_issued_utc: string;
    /**
     * @examples ["Please return to Company"]
     */
    lost_mode_message: string;
    /**
     * @examples ["555-555-5444"]
     */
    lost_mode_phone: string;
    /**
     * @examples ["59868"]
     */
    lost_mode_footnote: string;
    /**
     * @examples [1517598680459]
     */
    lost_location_epoch: number;
    /**
     * @examples ["2018-02-02T13:11:20.459-0600"]
     */
    lost_location_utc: string;
    /**
     * @examples [44.81436821]
     */
    lost_location_latitude: number;
    /**
     * @examples [-91.502672]
     */
    lost_location_longitude: number;
    /**
     * @examples [242.88067627]
     */
    lost_location_altitude: number;
    /**
     * @examples [-1]
     */
    lost_location_speed: number;
    /**
     * @examples [-1]
     */
    lost_location_course: number;
    /**
     * @examples [65]
     */
    lost_location_horizontal_accuracy: number;
    /**
     * @examples [10]
     */
    lost_location_vertical_accuracy: number;
  };
  network: {
    /**
     * @examples ["Verizon"]
     */
    home_carrier_network: string;
    /**
     * @examples ["Unknown"]
     */
    cellular_technology: string;
    /**
     * @examples ["Yes"]
     */
    voice_roaming_enabled: string;
    /**
     * @examples ["35 200706 987868 1"]
     */
    imei: string;
    /**
     * @examples ["8914 8500 0100 8914 7845"]
     */
    iccid: string;
    /**
     * @examples ["200706"]
     */
    meid: string;
    /**
     * @examples ["Verizon"]
     */
    current_carrier_network: string;
    /**
     * @examples ["20"]
     */
    carrier_settings_version: string;
    /**
     * @examples ["311"]
     */
    current_mobile_country_code: string;
    /**
     * @examples ["480"]
     */
    current_mobile_network_code: string;
    /**
     * @examples ["311"]
     */
    home_mobile_country_code: string;
    /**
     * @examples ["480"]
     */
    home_mobile_network_code: string;
    /**
     * @examples [true]
     */
    data_roaming_enabled: boolean;
    /**
     * @examples [true]
     */
    roaming: boolean;
    /**
     * @examples ["555-555-5400"]
     */
    phone_number: string;
  };
  certificates: {
    /**
     * @examples [1]
     */
    size: number;
    certificate: {
      /**
       * @examples ["JSS Built-in Certificate Authority"]
       */
      common_name: string;
      /**
       * @examples [true]
       */
      identity: boolean;
    };
  }[];
  configuration_profiles: {
    /**
     * @examples [1]
     */
    size: number;
    configuration_profile: {
      /**
       * @examples ["WiFi"]
       */
      display_name: string;
      /**
       * @examples [1]
       */
      version: number;
      /**
       * @examples ["279889AF-1564-4480-A61D-860DF5EFDF26"]
       */
      identifier: string;
      /**
       * @examples ["279889AF-1564-4480-A61D-860DF5EFDF26"]
       */
      uuid: string;
    };
  }[];
  provisioning_profiles: {
    /**
     * @examples [1]
     */
    size: number;
    mobile_device_provisioning_profile: {
      /**
       * @examples ["In-House App Provisioning Profile"]
       */
      display_name: string;
      /**
       * @examples ["November 18 2020 at 6:03 AM"]
       */
      expiration_date: string;
      /**
       * @examples [0]
       */
      expiration_date_epoch: number;
      /**
       * @examples ["2018-01-29T14:18:02.000-0600"]
       */
      expiration_date_utc: string;
      /**
       * @examples ["279889AF-1564-4480-A61D-860DF5EFDF26"]
       */
      uuid: string;
    };
  }[];
  mobile_device_groups: {
    /**
     * @examples [1]
     */
    id: number;
    /**
     * @examples ["All Managed iPhones"]
     */
    name: string;
  }[];
  extension_attributes: {
    /**
     * @examples [1]
     */
    id: number;
    /**
     * @examples ["Asset Selector"]
     */
    name: string;
    /**
     * @examples ["String"]
     */
    type: string;
    /**
     * @examples ["Sample Value"]
     */
    value: string;
  }[];
}
