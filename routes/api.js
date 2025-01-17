var express = require('express');
var router = express.Router();

const mainController = require('../controllers/mainController');
const cpuController = require('../controllers/cpuController');
const systemController = require('../controllers/systemController');
const memoryController = require('../controllers/memoryController');
const bateryController = require('../controllers/bateryController');
const graphicsController = require('../controllers/graphicsController');
const osController = require('../controllers/osController');
const diskController = require('../controllers/diskController');
const usbController = require('../controllers/usbController');
const printerController = require('../controllers/printerController');
const audioController = require('../controllers/audioController');
const bluetoothController = require('../controllers/bluetoothController');
const virtualboxController = require('../controllers/virtualboxController');
const wifiController = require('../controllers/wifiController');
const networkController = require('../controllers/networkController');
const dockerController = require('../controllers/dockerController');


// ###########################  R O U T E S  #############################
/* GET home page. */
router.get('/', mainController.index);

router.get('/sys/cpu', cpuController.cpuData);
router.get('/sys/cpu/flags', cpuController.flagsData);
router.get('/sys/cpu/cache', cpuController.cacheData);
router.get('/sys/cpu/temperature', cpuController.temperatureData);
router.get('/sys/cpu/load', cpuController.loadData);
router.get('/sys/cpu/processes', cpuController.processesData);
router.get('/sys/cpu/processLoad', cpuController.processLoadData); // Options test. Need to change

router.get('/sys/system', systemController.systemData);

router.get('/sys/memory', memoryController.memoryData);
router.get('/sys/memory/layout', memoryController.memoryLayoutData);

router.get('/sys/battery', bateryController.batteryData);

router.get('/sys/graphics', graphicsController.graphicsData);

router.get('/sys/os', osController.osData);
router.get('/sys/os/shell', osController.shellData);
router.get('/sys/os/versions', osController.versionsData);
router.get('/sys/os/users', osController.usersData);

router.get('/sys/disk', diskController.diskData);
router.get('/sys/blockDevices', diskController.blockDevicesData);
router.get('/sys/size', diskController.sizeData);

router.get('/sys/usb', usbController.usbData);

router.get('/sys/printer', printerController.printerData);

router.get('/sys/audio', audioController.audioData);

router.get('/sys/bluetooth', bluetoothController.bluetoothData);

router.get('/sys/virtualbox', virtualboxController.virtualboxData);

router.get('/sys/wifiNetworks', wifiController.wifiNetworksData);
router.get('/sys/wifiInterfaces', wifiController.wifiInterfacesData);
router.get('/sys/wifiConnections', wifiController.wifiConnectionsData);

router.get('/sys/networkInterfaces', networkController.networkInterfacesData);
router.get('/sys/networkInterfaceDefault', networkController.networkInterfaceDefaultData);
router.get('/sys/networkGatewayDefault', networkController.networkGatewayDefaultData);
router.get('/sys/networkStats', networkController.networkStatsData);
router.get('/sys/networkConnections', networkController.networkConnectionsData);

router.get('/sys/dockerInfo', dockerController.dockerInfoData);
router.get('/sys/dockerImages', dockerController.dockerImagesData);
router.get('/sys/dockerContainers', dockerController.dockerContainersData);
router.get('/sys/dockerContainerStats', dockerController.dockerContainerStatsData);
router.get('/sys/dockerContainerProcesses', dockerController.dockerContainerProcessesData);
router.get('/sys/dockerVolumes', dockerController.dockerVolumesData);
router.get('/sys/dockerAll', dockerController.dockerAllData);

// -------------------------------------------------------------------------------

module.exports = router;