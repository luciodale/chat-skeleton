import UIKit
import Capacitor
import CapApp_SPM

class MainViewController: CAPBridgeViewController {
    
    override func capacitorDidLoad() {
        bridge?.registerPluginInstance(AuthPlugin())
    }
}
