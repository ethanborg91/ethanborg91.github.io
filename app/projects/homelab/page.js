import styles from "../../main.module.css";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function Homelab() {
  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <Header />
        <div className={styles.page}>
          <div className={styles.content}>
            <div className="w-full font-sans text-white">
              <h2 className="text-5xl leading-none font-semibold mb-6">Homelab</h2>

              <div className="block">
                <img
                  src="/Images/Full-Server.jpeg"
                  alt="Full homelab server setup"
                  className="block mx-auto mb-6 sm:float-right sm:mx-0 sm:ml-6 sm:mb-4 rounded-lg w-64 sm:w-80"
                />

                <p className="text-gray-400 leading-relaxed">
                  My personal homelab setup for self-hosting services, learning
                  enterprise technologies, and experimenting with infrastructure.
                  What started as curiosity has become a hands-on playground for
                  expanding my skills and taking control of my own data.
                </p>

                <h3 className="text-2xl mt-6 text-gray-300">Hardware</h3>
                <ul className="text-gray-400 mt-2 pl-6 list-disc space-y-1">
                  <li>
                    <span className="text-white font-medium">Server:</span> Dell PowerEdge R430
                  </li>
                  <li>
                    <span className="text-white font-medium">CPU:</span> 40 x Intel(R) Xeon(R) CPU E5-2630 v4 @ 2.20GHz (2 Sockets)
                  </li>
                  <li>
                    <span className="text-white font-medium">RAM:</span> 16 GB
                  </li>
                  <li>
                    <span className="text-white font-medium">Storage:</span> 128 GB SSD (boot) + 2x 2TB HDD (NAS)
                  </li>
                </ul>

                <h3 className="text-2xl mt-6 text-gray-300">Virtualization</h3>
                <p className="text-gray-400 mt-2 leading-relaxed">
                  Running Proxmox VE as the hypervisor, which allows me to spin up
                  VMs and containers for different services while keeping everything
                  isolated and manageable.
                </p>

                <h3 className="text-2xl mt-6 text-gray-300">Services</h3>
                <ul className="text-gray-400 mt-2 pl-6 list-disc space-y-1">
                  <li>
                    <span className="text-white font-medium">NAS:</span> OpenMediaVault VM with 2x 2TB drives in RAID1 for redundant storage
                  </li>
                  <li>
                    <span className="text-white font-medium">Game Server:</span> Minecraft server for friends and family
                  </li>
                </ul>

                <div className="clear-both" />
              </div>

              <h3 className="text-2xl mt-6 text-gray-300">Why I Built This</h3>
              <p className="text-gray-400 mt-2 leading-relaxed">
                The homelab serves multiple purposes: hands-on learning with
                enterprise hardware and software, self-hosting to own my data
                rather than relying on cloud services, building practical skills
                relevant to my career, and honestly just having fun tinkering with
                technology.
              </p>

              <h3 className="text-2xl mt-6 text-gray-300">Future Plans</h3>
              <p className="text-gray-400 mt-2 leading-relaxed">
                Looking to expand the lab with additional services, including
                pfSense for VPN and network security, and Plex for a home media
                server.
              </p>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
