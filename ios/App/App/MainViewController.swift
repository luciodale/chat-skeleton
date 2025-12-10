import UIKit
import Capacitor
import CapApp_SPM

class MainViewController: CAPBridgeViewController {
    
    override func viewDidLoad() {
        super.viewDidLoad()
        webView?.installNativeAuthBridge()
    }
}
