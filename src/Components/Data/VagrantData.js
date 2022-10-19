export const VagrantData = [
  {
    action: "Start",
    command: "vagrant up",
    note: "",
    category: "Basics",
  },
  {
    action: "Stop",
    command: "vagrant halt",
    note: "This command shuts down the running machine Vagrant is managing. Vagrant will first attempt to gracefully shut down the machine by running the guest OS shutdown mechanism. If this fails, or if the --force flag is specified, Vagrant will effectively just shut off power to the machine.",
    category: "Basics",
  },
  {
    action: "Status of Running",
    command: "vagrant status",
    note: "You can also do vagrant global-status",
    category: "Basics",
  },
  {
    action: "Stop Certain One",
    command: "vagrant halt <name>",
    note: "",
    category: "Basics",
  },
  {
    action: "Stops running machine and destroys all resources",
    command: "vagrant destroy [name|id]",
    note: "This command stops the running machine Vagrant is managing and destroys all resources that were created during the machine creation process. After running this command, your computer should be left at a clean state, as if you never created the guest machine in the first place.",
    category: "Basics",
  },
  {
    action: "Reload",
    command: "vagrant reload [name|id]",
    note: "The equivalent of running a halt followed by an up.",
    category: "Basics",
  },
  {
    action: "Up",
    command: "vagrant up [name|id]",
    note: "This command creates and configures guest machines according to your Vagrantfile.",
    category: "Basics",
  },
  {
    action: "Version",
    command: "vagrant --version",
    note: "This command tells you the version of Vagrant you have installed as well as the latest version of Vagrant that is currently available.",
    category: "Basics",
  },

  {
    action: "Update plugins",
    command: "vagrant plugin update ",
    note: "Command in terminal in your vm project",
    category: "Basics",
  },
  {
    action: "List of vagrant plugins",
    command: "vagrant plugin list",
    note: "",
    category: "Basics",
  },
  {
    action: "List of Boxes",
    command: "vagrant box list",
    note: "gives list of boxes as they might be named different on Virtualmachine",
    category: "Basics",
  },
  { action: "Version", command: "vagrant -v", note: "", category: "Basics" },
  {
    action: "Check packages are behind",
    command: "brew update",
    note: "",
    category: "Basics",
  },
  {
    action: "Install Particular Version",
    command: "brew cask install vagrant --version=2.2.14",
    note: "",
    category: "Basics",
  },
  {
    action: "Update VM",
    command: "vagrant up --provision [machine_name]",
    note: "If DB changes are made you can provision first to see if that works before destroying and upping",
    category: "Basics",
  },
  {
    action: "List of vagrant boxes",
    command: "vagrant box list",
    note: "",
    category: "Basics",
  },
  {
    action: "Remove duplicate vagrant boxes",
    command: "vagrant box list",
    note: "",
    category: "Basics",
  },
  // { action: "START", command: "git", note: "", category: "Basics" },
];

export default VagrantData;
