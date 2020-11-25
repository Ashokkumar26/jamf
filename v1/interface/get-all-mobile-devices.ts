interface outputSchema {
  mobile_devices: {
    /**
     * @examples [1]
     */
    id: number;
    /**
     * @examples["Tinas iPad"]
     */
    name: string;
    /**
     * @examples ["Tinas iPad"]
     */
    device_name: string;
    /**
     * @examples ["270aae10800b6e61a2ee2bbc285eb967050b5984"]
     */
    udid: string;
    /**
     * @examples ["C02Q7KHTGFWF"]
     */
    serial_number: string;
    /**
     * @examples ["123-1234-123"]
     */
    phone_number: string;
    /**
     * @examples ["E0:AC:CB:97:36:G4"]
     */
    wifi_mac_address: string;
    /**
     * @examples [true]
     */
    managed: boolean;
    /**
     * @examples [true]
     */
    supervised: boolean;
    /**
     * @examples ["iPhone 6s"]
     */
    model: string;
    /**
     * @examples ["iPhone8,1"]
     */
    model_identifier: string;
    /**
     * @examples ["iPhone 6s"]
     */
    modelDisplay: string;
    /**
     * @examples ["iPhone 6s"]
     */
    model_display: string;
    /**
     * @examples ["Jhon"]
     */
    username: string;
  }[];
  /**
   * @examples [true]
   */
  action_success: boolean;
}
