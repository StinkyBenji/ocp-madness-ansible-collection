# Role Name

ocp_gitops_bootstrap

## Requirements

- `oc` CLI

## Role Variables

- `ocp_gitops_operator_channel`
- `ocp_gitops_operator_startingCSV`
- `ocp_eso_startingCSV`
- `ocp_gitrepos`
- `ocp_gitrepo_ssh_private_key`
- `ocp_trusted_ca_bundle`
- `ocp_automation_repo`
- `ocp_cluster_config_repo`
- `ocp_cluster_name`
- `vault_server_addr`
- `vault_role_id`

## Dependencies

- kubernetes.core

## Example Playbook

```
- hosts: all
  roles:
     - role: ocp_gitops_bootstrap
```

## License

GPL-2.0-or-later

## Author Information

Rui Zhang
