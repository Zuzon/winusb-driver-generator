/*
 * Copyright 2017 resin.io
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @module winusb-driver-generator
 */

'use strict';

module.exports = require('bindings')({
  bindings: 'Generator',
  /* eslint-disable camelcase */
  module_root: __dirname + '/node_modules/winusb-driver-generator'
  /* eslint-enable camelcase */
});

module.exports.hasDriver = (vendorId, productId) => {
  for (const device of module.exports.listDriverlessDevices()) {
    if (device.vid === vendorId && device.pid === productId) {
      return false;
    }
  }

  return true;
};
