# VCD Plugin for Cloud Partner Navigator apps

## Overview

This plugin contains static links in the Applications / Services section to different SaaS solutions. It also provides example VM context menu items
for Carbon Black

Created from Showcase-Plugin https://github.com/vmware-samples/vcd-ext-samples/tree/showcase-plugin
## Build

NPM version 6.14.8
Node version 10.20.0

```bash
git clone -b main --single-branch https://github.com/tschoergez/vcd-plugin-CPNPrototype.git
cd vcd-ext-samples

# install project dependencies
npm ci

# build plugin
npm run build
```

## Contributing

The vcd-ext-samples project team welcomes contributions from the community. Before you start working with vcd-ext-samples, please read our [Developer Certificate of Origin](https://cla.vmware.com/dco). All contributions to this repository must be signed as described on that page. Your signature certifies that you wrote the patch or have the right to pass it on as an open-source patch. For more detailed information, refer to [CONTRIBUTING.md](CONTRIBUTING.md).