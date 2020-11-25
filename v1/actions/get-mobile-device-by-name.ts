import { getExecuteAction } from "../common/utils";
import { errors } from "../common/errors";
import { AuthT, action2 } from "../common/type";

export const name = "Get Mobile device by name";

export const input = [
  {
    key: "deviceName",
    displayTitle: "Device Name",
    description: "Provide device name.Mobile device name is case sensitive.",
    required: true,
    config: { kind: "text" },
  },
];
export const output = {
  properties: {
    mobile_device: {
      type: "object",
      properties: {
        general: {
          type: "object",
          properties: {
            id: {
              examples: [1],
              type: "number",
              title: "Id",
              $id: "/properties/mobile_device/general/id",
            },
            display_name: {
              examples: ["iPhone 6s"],
              type: "string",
              title: "Display Name",
              $id: "/properties/mobile_device/general/display_name",
            },
            device_name: {
              examples: ["iPhone 6s"],
              type: "string",
              title: "Device Name",
              $id: "/properties/mobile_device/general/device_name",
            },
            name: {
              examples: ["iPhone 6s"],
              type: "string",
              title: "Name",
              $id: "/properties/mobile_device/general/name",
            },
            asset_tag: {
              examples: ["string"],
              type: "string",
              title: "Asset Tag",
              $id: "/properties/mobile_device/general/asset_tag",
            },
            last_inventory_update: {
              examples: ["Wednesday, November 18 2020 at 6:03 AM"],
              type: "string",
              title: "Last Inventory Update",
              $id: "/properties/mobile_device/general/last_inventory_update",
            },
            last_inventory_update_epoch: {
              examples: [1499470624555],
              type: "number",
              title: "Last Inventory Update Epoch",
              $id:
                "/properties/mobile_device/general/last_inventory_update_epoch",
            },
            last_inventory_update_utc: {
              examples: ["2017-07-07T18:37:04.555-0500"],
              type: "string",
              title: "Last Inventory Update UTC",
              $id:
                "/properties/mobile_device/general/last_inventory_update_utc",
            },
            capacity: {
              examples: [12159],
              type: "number",
              title: "Capacity",
              $id: "/properties/mobile_device/general/capacity",
            },
            capacity_mb: {
              examples: [12159],
              type: "number",
              title: "Capacity Mb",
              $id: "/properties/mobile_device/general/capacity_mb",
            },
            available: {
              examples: [11259],
              type: "number",
              title: "Available",
              $id: "/properties/mobile_device/general/available",
            },
            available_mb: {
              examples: [11259],
              type: "number",
              title: "Available Mb",
              $id: "/properties/mobile_device/general/available_mb",
            },
            percentage_used: {
              examples: [5],
              type: "number",
              title: "Percentage Used",
              $id: "/properties/mobile_device/general/percentage_used",
            },
            os_type: {
              examples: ["iOS"],
              type: "string",
              title: "Os Type",
              $id: "/properties/mobile_device/general/os_type",
            },
            os_version: {
              examples: ["10.3.2"],
              type: "string",
              title: "Os Version",
              $id: "/properties/mobile_device/general/os_version",
            },
            os_build: {
              examples: ["14F89"],
              type: "string",
              title: "Os Build",
              $id: "/properties/mobile_device/general/os_build",
            },
            serial_number: {
              examples: ["C02Q7KHTGFWF"],
              type: "string",
              title: "Serial Number",
              $id: "/properties/mobile_device/general/serial_number",
            },
            udid: {
              examples: ["270aae10800b6e61a2ee2bbc285eb967050b5984"],
              type: "string",
              title: "Udid",
              $id: "/properties/mobile_device/general/udid",
            },
            initial_entry_date_epoch: {
              examples: [1499470624555],
              type: "number",
              title: "Initial Entry Date Epoch",
              $id: "/properties/mobile_device/general/initial_entry_date_epoch",
            },
            initial_entry_date_utc: {
              examples: ["2017-07-07T18:37:04.555-0500"],
              type: "string",
              title: "Initial Entry Date UTC",
              $id: "/properties/mobile_device/general/initial_entry_date_utc",
            },
            phone_number: {
              examples: ["123-555-6789"],
              type: "string",
              title: "Phone Number",
              $id: "/properties/mobile_device/general/phone_number",
            },
            ip_address: {
              examples: ["192.0.0.1"],
              type: "string",
              title: "Ip Address",
              $id: "/properties/mobile_device/general/ip_address",
            },
            wifi_mac_address: {
              examples: ["E0:AC:CB:97:36:G4"],
              type: "string",
              title: "Wifi Mac Address",
              $id: "/properties/mobile_device/general/wifi_mac_address",
            },
            bluetooth_mac_address: {
              examples: ["E0:AC:CB:97:36:G4"],
              type: "string",
              title: "Bluetooth Mac Address",
              $id: "/properties/mobile_device/general/bluetooth_mac_address",
            },
            modem_firmware: {
              examples: ["2.61.00"],
              type: "string",
              title: "Modem Firmware",
              $id: "/properties/mobile_device/general/modem_firmware",
            },
            model: {
              examples: ["iPhone 6s"],
              type: "string",
              title: "Model",
              $id: "/properties/mobile_device/general/model",
            },
            model_identifier: {
              examples: ["iPhone8,1"],
              type: "string",
              title: "Model Identifier",
              $id: "/properties/mobile_device/general/model_identifier",
            },
            model_number: {
              examples: ["MKRY2LL"],
              type: "string",
              title: "Model Number",
              $id: "/properties/mobile_device/general/model_number",
            },
            modelDisplay: {
              examples: ["iPhone 6s"],
              type: "string",
              title: "Model Display",
              $id: "/properties/mobile_device/general/modelDisplay",
            },
            model_display: {
              examples: ["iPhone 6s"],
              type: "string",
              title: "Model Display",
              $id: "/properties/mobile_device/general/model_display",
            },
            device_ownership_level: {
              examples: ["Institutional"],
              type: "string",
              title: "Device Ownership Level",
              $id: "/properties/mobile_device/general/device_ownership_level",
            },
            enrollment_method: {
              examples: ["manual"],
              type: "string",
              title: "Enrollment Method",
              $id: "/properties/mobile_device/general/enrollment_method",
            },
            last_enrollment_epoch: {
              examples: [1499470624555],
              type: "number",
              title: "Last Enrollment Epoch",
              $id: "/properties/mobile_device/general/last_enrollment_epoch",
            },
            last_enrollment_utc: {
              examples: ["2017-07-07T18:37:04.555-0500"],
              type: "string",
              title: "Last Enrollment UTC",
              $id: "/properties/mobile_device/general/last_enrollment_utc",
            },
            mdm_profile_expiration_epoch: {
              examples: [1499470624555],
              type: "number",
              title: "Mdm Profile Expiration Epoch",
              $id:
                "/properties/mobile_device/general/mdm_profile_expiration_epoch",
            },
            mdm_profile_expiration_utc: {
              examples: ["2017-07-07T18:37:04.555-0500"],
              type: "string",
              title: "Mdm Profile Expiration UTC",
              $id:
                "/properties/mobile_device/general/mdm_profile_expiration_utc",
            },
            managed: {
              examples: [true],
              type: "boolean",
              title: "Managed",
              $id: "/properties/mobile_device/general/managed",
            },
            supervised: {
              examples: [true],
              type: "boolean",
              title: "Supervised",
              $id: "/properties/mobile_device/general/supervised",
            },
            exchange_activesync_device_identifier: {
              examples: ["TUCLLFJHPL779ACL9DCJQFN39F"],
              type: "string",
              title: "Exchange Activesync Device Identifier",
              $id:
                "/properties/mobile_device/general/exchange_activesync_device_identifier",
            },
            shared: {
              examples: ["string"],
              type: "string",
              title: "Shared",
              $id: "/properties/mobile_device/general/shared",
            },
            diagnostic_submission: {
              examples: [""],
              type: "string",
              title: "Diagnostic Submission",
              $id: "/properties/mobile_device/general/diagnostic_submission",
            },
            app_analytics: {
              examples: [""],
              type: "string",
              title: "App Analytics",
              $id: "/properties/mobile_device/general/app_analytics",
            },
            tethered: {
              examples: ["string"],
              type: "string",
              title: "Tethered",
              $id: "/properties/mobile_device/general/tethered",
            },
            battery_level: {
              examples: [95],
              type: "number",
              title: "Battery Level",
              $id: "/properties/mobile_device/general/battery_level",
            },
            ble_capable: {
              examples: [true],
              type: "boolean",
              title: "Ble Capable",
              $id: "/properties/mobile_device/general/ble_capable",
            },
            device_locator_service_enabled: {
              examples: [true],
              type: "boolean",
              title: "Device Locator Service Enabled",
              $id:
                "/properties/mobile_device/general/device_locator_service_enabled",
            },
            do_not_disturb_enabled: {
              examples: [true],
              type: "boolean",
              title: "Do Not Disturb Enabled",
              $id: "/properties/mobile_device/general/do_not_disturb_enabled",
            },
            cloud_backup_enabled: {
              examples: [true],
              type: "boolean",
              title: "Cloud Backup Enabled",
              $id: "/properties/mobile_device/general/cloud_backup_enabled",
            },
            last_cloud_backup_date_epoch: {
              examples: [1499470624555],
              type: "number",
              title: "Last Cloud Backup Date Epoch",
              $id:
                "/properties/mobile_device/general/last_cloud_backup_date_epoch",
            },
            last_cloud_backup_date_utc: {
              examples: ["2017-07-07T18:37:04.555-0500"],
              type: "string",
              title: "Last Cloud Backup Date UTC",
              $id:
                "/properties/mobile_device/general/last_cloud_backup_date_utc",
            },
            location_services_enabled: {
              examples: [true],
              type: "boolean",
              title: "Location Services Enabled",
              $id:
                "/properties/mobile_device/general/location_services_enabled",
            },
            itunes_store_account_is_active: {
              examples: [true],
              type: "boolean",
              title: "Itunes Store Account Is Active",
              $id:
                "/properties/mobile_device/general/itunes_store_account_is_active",
            },
            last_backup_time_epoch: {
              examples: [1499470624555],
              type: "number",
              title: "Last Backup Time Epoch",
              $id: "/properties/mobile_device/general/last_backup_time_epoch",
            },
            last_backup_time_utc: {
              examples: ["2017-07-07T18:37:04.555-0500"],
              type: "string",
              title: "Last Backup Time UTC",
              $id: "/properties/mobile_device/general/last_backup_time_utc",
            },
            site: {
              type: "object",
              properties: {
                id: {
                  examples: [-1],
                  type: "number",
                  title: "Id",
                  $id: "/properties/mobile_device/general/site/id",
                },
                name: {
                  examples: ["None"],
                  type: "string",
                  title: "Name",
                  $id: "/properties/mobile_device/general/site/name",
                },
              },
              title: "Site",
            },
          },
          title: "General",
        },
        location: {
          type: "object",
          properties: {
            username: {
              examples: ["JBetty"],
              type: "string",
              title: "User Name",
              $id: "/properties/mobile_device/location/username",
            },
            realname: {
              examples: ["Betty Jackson"],
              type: "string",
              title: "Real Name",
              $id: "/properties/mobile_device/location/realname",
            },
            real_name: {
              examples: ["Betty Jackson"],
              type: "string",
              title: "Real Name",
              $id: "/properties/mobile_device/location/real_name",
            },
            email_address: {
              examples: '["jbetty',
              type: "string",
              title: "Email Address",
              $id: "/properties/mobile_device/location/email_address",
            },
            position: {
              examples: ["System Engineer"],
              type: "string",
              title: "Position",
            },
            phone: {
              examples: ["123-456-6789"],
              type: "string",
              title: "Phone",
            },
            phone_number: {
              examples: ["123-456-6789"],
              type: "string",
              title: "Phone Number",
            },
            department: {
              examples: ["Sales Staff"],
              type: "string",
              title: "Department",
            },
            building: {
              examples: ["New York Office"],
              type: "string",
              title: "Building",
            },
            room: {
              examples: ["1175"],
              type: "string",
              title: "Room",
            },
          },
          title: "Location",
        },
        purchasing: {
          type: "collection",
          title: "Purchasing",
          $id: "/properties/mobile_device/purchasing",
          item: {
            type: "object",
            properties: {
              is_purchased: {
                examples: [true],
                type: "boolean",
                title: "Is Purchased",
                $id: "/properties/is_purchased",
              },
              is_leased: {
                examples: [true],
                type: "boolean",
                title: "Is Leased",
                $id: "/properties/is_leased",
              },
              po_number: {
                examples: ["567"],
                type: "string",
                title: "Po Number",
                $id: "/properties/po_number",
              },
              vendor: {
                examples: ["Jhon"],
                type: "string",
                title: "Vendor",
                $id: "/properties/vendor",
              },
              applecare_id: {
                examples: ["434"],
                type: "string",
                title: "Applecare Id",
                $id: "/properties/applecare_id",
              },
              purchase_price: {
                examples: ["325"],
                type: "string",
                title: "Purchase Price",
                $id: "/properties/purchase_price",
              },
              purchasing_account: {
                examples: ["bettyj"],
                type: "string",
                title: "Purchasing Account",
                $id: "/properties/purchasing_account",
              },
              po_date: {
                examples: ["string"],
                type: "string",
                title: "Po Date",
                $id: "/properties/po_date",
              },
              po_date_epoch: {
                examples: [0],
                type: "number",
                title: "Po Date Epoch",
                $id: "/properties/po_date_epoch",
              },
              po_date_utc: {
                examples: ["2018-01-29T14:18:02.000-0600"],
                type: "string",
                title: "Po Date UTC",
                $id: "/properties/po_date_utc",
              },
              warranty_expires: {
                examples: ["November 18 2020 at 6:03 AM"],
                type: "string",
                title: "Warranty Expires",
                $id: "/properties/warranty_expires",
              },
              warranty_expires_epoch: {
                examples: [0],
                type: "number",
                title: "Warranty Expires Epoch",
                $id: "/properties/warranty_expires_epoch",
              },
              warranty_expires_utc: {
                examples: ["2018-01-29T14:18:02.000-0600"],
                type: "string",
                title: "Warranty Expires UTC",
                $id: "/properties/warranty_expires_utc",
              },
              lease_expires: {
                examples: ["November 18 2020 at 6:03 AM"],
                type: "string",
                title: "Lease Expires",
                $id: "/properties/lease_expires",
              },
              lease_expires_epoch: {
                examples: [0],
                type: "number",
                title: "Lease Expires Epoch",
                $id: "/properties/lease_expires_epoch",
              },
              lease_expires_utc: {
                examples: ["2018-01-29T14:18:02.000-0600"],
                type: "string",
                title: "Lease Expires UTC",
                $id: "/properties/lease_expires_utc",
              },
              life_expectancy: {
                examples: [0],
                type: "number",
                title: "Life Expectancy",
                $id: "/properties/life_expectancy",
              },
              purchasing_contact: {
                examples: ["Jhon"],
                type: "string",
                title: "Purchasing Contact",
                $id: "/properties/purchasing_contact",
              },
              attachments: {
                type: "object",
                properties: {
                  id: {
                    examples: [1],
                    type: "number",
                    title: "Id",
                    $id: "/properties/attachments/id",
                  },
                  filename: {
                    examples: ["ysl.pdf"],
                    type: "string",
                    title: "File Name",
                    $id: "/properties/attachments/filename",
                  },
                  uri: {
                    examples: [
                      "https://abcd.jamfcloud.com/attachment.html?id=1&o=r",
                    ],
                    type: "string",
                    title: "Uri",
                    $id: "/properties/attachments/uri",
                  },
                },
                title: "Attachments",
              },
            },
          },
        },
      },
      title: "Mobile Device",
    },
    applications: {
      type: "collection",
      title: "Applications",
      $id: "/properties/applications",
      item: {
        type: "object",
        properties: {
          size: {
            examples: [1],
            type: "number",
            title: "Size",
            $id: "/properties/size",
          },
          application: {
            type: "object",
            properties: {
              application_name: {
                examples: ["Self Service Mobile"],
                type: "string",
                title: "Application Name",
                $id: "/properties/application/application_name",
              },
              application_version: {
                examples: ["10.1.1"],
                type: "string",
                title: "Application Version",
                $id: "/properties/application/application_version",
              },
              identifier: {
                examples: ["com.jamfsoftware.selfservice"],
                type: "string",
                title: "Identifier",
                $id: "/properties/application/identifier",
              },
            },
            title: "Application",
          },
        },
      },
    },
    security: {
      type: "object",
      properties: {
        data_protection: {
          examples: [true],
          type: "boolean",
          title: "Data Protection",
          $id: "/properties/security/data_protection",
        },
        block_level_encryption_capable: {
          examples: [true],
          type: "boolean",
          title: "Block Level Encryption Capable",
          $id: "/properties/security/block_level_encryption_capable",
        },
        file_level_encryption_capable: {
          examples: [true],
          type: "boolean",
          title: "File Level Encryption Capable",
          $id: "/properties/security/file_level_encryption_capable",
        },
        passcode_present: {
          examples: [true],
          type: "boolean",
          title: "Passcode Present",
          $id: "/properties/security/passcode_present",
        },
        passcode_compliant: {
          examples: [true],
          type: "boolean",
          title: "Passcode Compliant",
          $id: "/properties/security/passcode_compliant",
        },
        passcode_compliant_with_profile: {
          examples: [true],
          type: "boolean",
          title: "Passcode Compliant With Profile",
          $id: "/properties/security/passcode_compliant_with_profile",
        },
        passcode_lock_grace_period_enforced: {
          examples: ["Not Available"],
          type: "string",
          title: "Passcode Lock Grace Period Enforced",
          $id: "/properties/security/passcode_lock_grace_period_enforced",
        },
        hardware_encryption: {
          examples: ["1"],
          type: "string",
          title: "Hardware Encryption",
          $id: "/properties/security/hardware_encryption",
        },
        activation_lock_enabled: {
          examples: [true],
          type: "boolean",
          title: "Activation Lock Enabled",
          $id: "/properties/security/activation_lock_enabled",
        },
        jailbreak_detected: {
          examples: ["Normal"],
          type: "string",
          title: "Jailbreak Detected",
          $id: "/properties/security/jailbreak_detected",
        },
        lost_mode_enabled: {
          examples: [true],
          type: "boolean",
          title: "Lost Mode Enabled",
          $id: "/properties/security/lost_mode_enabled",
        },
        lost_mode_enforced: {
          examples: [true],
          type: "boolean",
          title: "Lost Mode Enforced",
          $id: "/properties/security/lost_mode_enforced",
        },
        lost_mode_enable_issued_epoch: {
          examples: [1517598768512],
          type: "number",
          title: "Lost Mode Enable Issued Epoch",
          $id: "/properties/security/lost_mode_enable_issued_epoch",
        },
        lost_mode_enable_issued_utc: {
          examples: ["2018-02-02T13:12:48.512-0600"],
          type: "string",
          title: "Lost Mode Enable Issued UTC",
          $id: "/properties/security/lost_mode_enable_issued_utc",
        },
        lost_mode_message: {
          examples: ["Please return to Company"],
          type: "string",
          title: "Lost Mode Message",
          $id: "/properties/security/lost_mode_message",
        },
        lost_mode_phone: {
          examples: ["555-555-5444"],
          type: "string",
          title: "Lost Mode Phone",
          $id: "/properties/security/lost_mode_phone",
        },
        lost_mode_footnote: {
          examples: ["59868"],
          type: "string",
          title: "Lost Mode Footnote",
          $id: "/properties/security/lost_mode_footnote",
        },
        lost_location_epoch: {
          examples: [1517598680459],
          type: "number",
          title: "Lost Location Epoch",
          $id: "/properties/security/lost_location_epoch",
        },
        lost_location_utc: {
          examples: ["2018-02-02T13:11:20.459-0600"],
          type: "string",
          title: "Lost Location UTC",
          $id: "/properties/security/lost_location_utc",
        },
        lost_location_latitude: {
          examples: [44.81436821],
          type: "number",
          title: "Lost Location Latitude",
          $id: "/properties/security/lost_location_latitude",
        },
        lost_location_longitude: {
          examples: [-91.502672],
          type: "number",
          title: "Lost Location Longitude",
          $id: "/properties/security/lost_location_longitude",
        },
        lost_location_altitude: {
          examples: [242.88067627],
          type: "number",
          title: "Lost Location Altitude",
          $id: "/properties/security/lost_location_altitude",
        },
        lost_location_speed: {
          examples: [-1],
          type: "number",
          title: "Lost Location Speed",
          $id: "/properties/security/lost_location_speed",
        },
        lost_location_course: {
          examples: [-1],
          type: "number",
          title: "Lost Location Course",
          $id: "/properties/security/lost_location_course",
        },
        lost_location_horizontal_accuracy: {
          examples: [65],
          type: "number",
          title: "Lost Location Horizontal Accuracy",
          $id: "/properties/security/lost_location_horizontal_accuracy",
        },
        lost_location_vertical_accuracy: {
          examples: [10],
          type: "number",
          title: "Lost Location Vertical Accuracy",
          $id: "/properties/security/lost_location_vertical_accuracy",
        },
      },
      title: "Security",
    },
    network: {
      type: "object",
      properties: {
        home_carrier_network: {
          examples: ["Verizon"],
          type: "string",
          title: "Home Carrier Network",
          $id: "/properties/network/home_carrier_network",
        },
        cellular_technology: {
          examples: ["Unknown"],
          type: "string",
          title: "Cellular Technology",
          $id: "/properties/network/cellular_technology",
        },
        voice_roaming_enabled: {
          examples: ["Yes"],
          type: "string",
          title: "Voice Roaming Enabled",
          $id: "/properties/network/voice_roaming_enabled",
        },
        imei: {
          examples: ["35 200706 987868 1"],
          type: "string",
          title: "Imei",
          $id: "/properties/network/imei",
        },
        iccid: {
          examples: ["8914 8500 0100 8914 7845"],
          type: "string",
          title: "Iccid",
          $id: "/properties/network/iccid",
        },
        meid: {
          examples: ["200706"],
          type: "string",
          title: "Meid",
          $id: "/properties/network/meid",
        },
        current_carrier_network: {
          examples: ["Verizon"],
          type: "string",
          title: "Current Carrier Network",
          $id: "/properties/network/current_carrier_network",
        },
        carrier_settings_version: {
          examples: ["20"],
          type: "string",
          title: "Carrier Settings Version",
          $id: "/properties/network/carrier_settings_version",
        },
        current_mobile_country_code: {
          examples: ["311"],
          type: "string",
          title: "Current Mobile Country Code",
          $id: "/properties/network/current_mobile_country_code",
        },
        current_mobile_network_code: {
          examples: ["480"],
          type: "string",
          title: "Current Mobile Network Code",
          $id: "/properties/network/current_mobile_network_code",
        },
        home_mobile_country_code: {
          examples: ["311"],
          type: "string",
          title: "Home Mobile Country Code",
          $id: "/properties/network/home_mobile_country_code",
        },
        home_mobile_network_code: {
          examples: ["480"],
          type: "string",
          title: "Home Mobile Network Code",
          $id: "/properties/network/home_mobile_network_code",
        },
        data_roaming_enabled: {
          examples: [true],
          type: "boolean",
          title: "Data Roaming Enabled",
          $id: "/properties/network/data_roaming_enabled",
        },
        roaming: {
          examples: [true],
          type: "boolean",
          title: "Roaming",
          $id: "/properties/network/roaming",
        },
        phone_number: {
          examples: ["555-555-5400"],
          type: "string",
          title: "Phone Number",
          $id: "/properties/network/phone_number",
        },
      },
      title: "Network",
    },
    certificates: {
      type: "collection",
      title: "Certificates",
      $id: "/properties/certificates",
      item: {
        type: "object",
        properties: {
          size: {
            examples: [1],
            type: "number",
            title: "Size",
            $id: "/properties/size",
          },
          certificate: {
            type: "object",
            properties: {
              common_name: {
                examples: ["JSS Built-in Certificate Authority"],
                type: "string",
                title: "Common Name",
                $id: "/properties/certificate/common_name",
              },
              identity: {
                examples: [true],
                type: "boolean",
                title: "Identity",
                $id: "/properties/certificate/identity",
              },
            },
            title: "Certificate",
          },
        },
      },
    },
    configuration_profiles: {
      type: "collection",
      title: "Configuration Profiles",
      $id: "/properties/configuration_profiles",
      item: {
        type: "object",
        properties: {
          size: {
            examples: [1],
            type: "number",
            title: "Size",
            $id: "/properties/size",
          },
          configuration_profile: {
            type: "object",
            properties: {
              display_name: {
                examples: ["WiFi"],
                type: "string",
                title: "Display Name",
                $id: "/properties/configuration_profile/display_name",
              },
              version: {
                examples: [1],
                type: "number",
                title: "Version",
                $id: "/properties/configuration_profile/version",
              },
              identifier: {
                examples: ["279889AF-1564-4480-A61D-860DF5EFDF26"],
                type: "string",
                title: "Identifier",
                $id: "/properties/configuration_profile/identifier",
              },
              uuid: {
                examples: ["279889AF-1564-4480-A61D-860DF5EFDF26"],
                type: "string",
                title: "Uuid",
                $id: "/properties/configuration_profile/uuid",
              },
            },
            title: "Configuration Profile",
          },
        },
      },
    },
    provisioning_profiles: {
      type: "collection",
      title: "Provisioning Profiles",
      $id: "/properties/provisioning_profiles",
      item: {
        type: "object",
        properties: {
          size: {
            examples: [1],
            type: "number",
            title: "Size",
            $id: "/properties/size",
          },
          mobile_device_provisioning_profile: {
            type: "object",
            properties: {
              display_name: {
                examples: ["In-House App Provisioning Profile"],
                type: "string",
                title: "Display Name",
                $id:
                  "/properties/mobile_device_provisioning_profile/display_name",
              },
              expiration_date: {
                examples: ["November 18 2020 at 6:03 AM"],
                type: "string",
                title: "Expiration Date",
                $id:
                  "/properties/mobile_device_provisioning_profile/expiration_date",
              },
              expiration_date_epoch: {
                examples: [0],
                type: "number",
                title: "Expiration Date Epoch",
                $id:
                  "/properties/mobile_device_provisioning_profile/expiration_date_epoch",
              },
              expiration_date_utc: {
                examples: ["2018-01-29T14:18:02.000-0600"],
                type: "string",
                title: "Expiration Date UTC",
                $id:
                  "/properties/mobile_device_provisioning_profile/expiration_date_utc",
              },
              uuid: {
                examples: ["279889AF-1564-4480-A61D-860DF5EFDF26"],
                type: "string",
                title: "Uuid",
                $id: "/properties/mobile_device_provisioning_profile/uuid",
              },
            },
            title: "Mobile Device Provisioning Profile",
          },
        },
      },
    },
    mobile_device_groups: {
      type: "collection",
      title: "Mobile Device Groups",
      $id: "/properties/mobile_device_groups",
      item: {
        type: "object",
        properties: {
          id: {
            examples: [1],
            type: "number",
            title: "Id Details",
            $id: "/properties/id",
          },
          name: {
            examples: ["All Managed iPhones"],
            type: "string",
            title: "Name Details",
            $id: "/properties/name",
          },
        },
      },
    },
    extension_attributes: {
      type: "collection",
      title: "Extension Attributes",
      $id: "/properties/extension_attributes",
      item: {
        type: "object",
        properties: {
          id: {
            examples: [1],
            type: "number",
            title: "Id Details",
            $id: "/properties/id",
          },
          name: {
            examples: ["Asset Selector"],
            type: "string",
            title: "Name Details",
            $id: "/properties/name",
          },
          type: {
            examples: ["String"],
            type: "string",
            title: "Type Details",
            $id: "/properties/type",
          },
          value: {
            examples: ["Sample Value"],
            type: "string",
            title: "Value Details",
            $id: "/properties/value",
          },
        },
      },
    },
  },
  type: "object",
  title: "Mobile Device Name",
};

type ExecuteInfo = AuthT & { deviceName: string };
export type mobileDeviceName = {
  input: ExecuteInfo;
  uri: "mobiledevices/name";
};
export const execute = (input: ExecuteInfo) => {
  let error = errors.DEVICE_NAME_NOT_EXIST;
  let method: action2 = "get";
  let getMobileDeviceName: mobileDeviceName = {
    input,
    uri: "mobiledevices/name",
  };
  return getExecuteAction(getMobileDeviceName, input.deviceName, error, method);
};
execute({
  auth: {
    domain: "https://testsample.jamfcloud.com",
    username: "ashok",
    password: "Skitter@123",
  },
  deviceName: "Tinas iPad",
})
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
