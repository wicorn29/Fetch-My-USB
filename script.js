document.addEventListener('DOMContentLoaded', () => {
    const getDeviceInfoButton = document.getElementById('getDeviceInfoButton');
    const deviceInfoDiv = document.getElementById('deviceInfo');

    getDeviceInfoButton.addEventListener('click', async () => {
        try {
            const devices = await navigator.usb.getDevices();

            if (devices.length > 0) {
                const device = devices[0];
                deviceInfoDiv.innerHTML = `
                    <h2>Device Information</h2>
                    <p>Device Name: ${device.productName}</p>
                    <p>Vendor ID: ${device.vendorId}</p>
                    <p>Product ID: ${device.productId}</p>
                `;
            } else {
                deviceInfoDiv.innerHTML = '<p>No USB devices found.</p>';
            }
        } catch (error) {
            console.error('Error accessing USB devices:', error);
        }
    });
});
