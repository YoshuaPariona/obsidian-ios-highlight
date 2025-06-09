// patterns.ts

const COMMAND_PATTERN = [
  // Configuración básica de dispositivos
  'int', 'interface', 'interfaces', 'description', 'enable', 'configure', 'terminal',
  'ip', 'address', 'subnet', 'hostname', 'banner', 'motd', 'shutdown', 'no', 'exit', 'end', 'delete',

  // Comandos directos
  'do',

  // Configuración de seguridad
  'secret', 'password', 'passwords', 'min-length', 'attempts', 'within', 'block-for',
  'service', 'encryption', 'access', 'permit', 'deny', 'local', 'username',
  'domain-name', 'domain-lookup', 'ssh', 'telnet', 'transport', 'input', 'vty',
  'exec-timeout', 'login', 'line', 'privilege', 'key', 'generate', 'rsa',
  'authentication-retries',

  // VLAN y enlaces troncales
  'switchport', 'mode', 'vlan', 'name', 'trunk', 'encapsulation', 'allowed', 'range', 'dot1q',
  'channel-group', 'port-channel', 'channel-protocol', 'pagp', 'lacp', 'etherchannel',

  // Seguridad en switch y control de tráfico
  'security', 'maximum', 'mac', 'mac-address-table', 'sticky', 'violation', 'protect', 'restrict',
  'spanning-tree', 'portfast', 'bpduguard', 'root', 'primary', 'secondary', 'rapid-pvst',

  // Protocolos de enrutamiento
  'router', 'network', 'area', 'ospf', 'eigrp', 'bgp', 'rip', 'isis', 'autonomous',
  'system', 'router-id', 'passive', 'summary', 'summary-address', 'default-information',
  'redistribute', 'route', 'metric', 'neighbor', 'remote', 'as-path',
  'local-preference', 'community', 'route-map', 'prefix-list', 'distribute-list', 'filter-list',

  // Interfaces especiales
  'loopback', 'tunnel', 'virtual-template', 'dialer', 'subinterface',

  // Servicios de red
  'dhcp', 'ip-dhcp', 'pool', 'default', 'dns', 'dns-server', 'server', 'lease', 'excluded-address',
  'helper-address', 'default-router', 'tftp', 'nat', 'inside', 'outside', 'source', 'list', 'overload',
  'default-gateway', 'unicast-routing',

  // QoS
  'class-map', 'match', 'policy-map', 'set', 'service-policy', 'priority',
  'bandwidth', 'queue', 'shape', 'police', 'fair-queue', 'random-detect', 'congestion',

  // Monitoreo y mantenimiento
  'ping', 'traceroute', 'brief', 'version', 'debug', 'undebug',
  'show', 'show interfaces', 'show ip route', 'show vlan', 'show spanning-tree',
  'show port-channel', 'show etherchannel', 'show cdp', 'show lldp', 'arp',

  // Configuración y verificación
  'running-config', 'startup-config', 'starting-config', 'copy', 'reload', 'erase',
  'clock', 'controllers',

  // IPv6
  'ipv6', 'unicast', 'routing', 'prefix', 'dual-ipv4-and-ipv6',

  // FHRP
  'standby', 'priority', 'preempt', 'glbp', 'track', 'decrement', 'hsrp', 'active',

  // Control de tráfico y servicios avanzados
  'control-plane', 'energywise', 'power', 'inline', 'vstack',
  'uplink', 'cts', 'role', 'storm-control', 'load-balance',

  // SLA y seguimiento
  'sla', 'schedule', 'track',

  // EEM y automatización
  'event', 'manager', 'applet', 'action',

  // Configuración avanzada y plantillas
  'archive', 'path', 'session', 'template', 'apply', 'profile',
  'activate', 'boot', 'history', 'clear', 'diff', 'lock', 'commit',
  'comment', 'checkpoint', 'create', 'restore', 'verify', 'merge',
  'rollback', 'replace', 'force', 'source', 'import', 'export',

  // Recuperación y seguridad
  'backup', 'recovery', 'reset', 'factory', 'secure', 'device', 'wipe', 'decryption',

  // Logs y auditoría
  'logging', 'syslog', 'host', 'audit', 'compliance', 'inventory', 'monitoring', 'collect', 'check',

  // APIs y automatización
  'api', 'rest', 'netconf', 'yang', 'automation', 'script', 'scripting', 'tcl',

  // Virtualización y contenedores
  'guest', 'shell', 'iox', 'container', 'docker', 'kubernetes', 'eem', 'feature',

  // Servicios en la nube y seguridad avanzada
  'cloud', 'connect', 'dna', 'center', 'ise', 'stealthwatch', 'umbrella', 'amp',
  'threat', 'grid', 'firepower', 'asa', 'ftd', 'meraki', 'viptela', 'sd-wan',

  // Comunicaciones unificadas
  'wireless', 'mobility', 'unified', 'communications', 'webex', 'jabber', 'spark', 'trop', 'dot11', 'ssid', 'wlan', 'capwap', 'ap',

  // Seguridad de red y endpoints
  'web', 'security', 'email', 'endpoint', 'iot', 'industrial', 'ot',
  'physical', 'identity', 'services', 'access', 'control',

  // VPN y túneles
  'ipsec', 'gre', 'tunnel', 'ikev2', 'transform-set', 'crypto', 'crypto map', 'isakmp',

  // Telemetría y analítica moderna
  'telemetry', 'model-driven', 'dial-out', 'gpb', 'json', 'grpc',

  // Gestión avanzada
  'install', 'module', 'hardware', 'license', 'chassis'
].join('|');


// Define el lenguaje personalizado para IOS
export const iosPatterns = {
  'comment-line': {
    pattern: /^\s*!.*$/gm,
    alias: 'comment'
  },
  'device-config': {
    pattern: /(\w+(?:\(\w+(?:-\w+)*\)|#|>))#?/g,
    alias: 'keyword'
  },
  'curly-braces': {
    pattern: /\{[^}]*\}/g,
    alias: 'curly-braces'
  },
  'command': {
    pattern: new RegExp(`(?<![\\w-])(${COMMAND_PATTERN})(?![\\w-])`, 'gi'),
    alias: 'function'
  }
};
