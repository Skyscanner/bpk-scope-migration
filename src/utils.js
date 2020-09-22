/*
 *
 * Copyright 2020 Skyscanner Ltd
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* eslint-disable no-console */

const colors = require('colors');

const prependPackageNameIfNecessary = packageName => {
  const matches = packageName.match(/^bpk-.+$/);
  if (!matches) {
    return packageName;
  }
  console.log(
    colors.yellow(`Replacing '${matches[0]}' with '@skyscanner/${matches[0]}'`),
  );
  return `@skyscanner/${matches[0]}`;
};

const replaceOccurrences = dependencies => {
  const updatedDependencies = dependencies;
  Object.keys(dependencies).forEach(packageName => {
    const updatedPackageName = prependPackageNameIfNecessary(packageName);
    if (updatedPackageName !== packageName) {
      updatedDependencies[updatedPackageName] =
        updatedDependencies[packageName];
      delete updatedDependencies[packageName];
    }
  });
  return updatedDependencies;
};

module.exports = replaceOccurrences;
