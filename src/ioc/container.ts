// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

import { Container, injectable, interfaces } from 'inversify';
import { Abstract, IServiceContainer, Newable } from './types';

@injectable()
export class ServiceContainer implements IServiceContainer {
    constructor(private container: Container) { }
    public get<T>(serviceIdentifier: interfaces.ServiceIdentifier<T>, name?: string | number | symbol): T {
        return name ? this.container.getNamed<T>(serviceIdentifier, name) : this.container.get<T>(serviceIdentifier);
    }
    public getAll<T>(serviceIdentifier: string | symbol | Newable<T> | Abstract<T>, name?: string | number | symbol | undefined): T[] {
        return name ? this.container.getAllNamed<T>(serviceIdentifier, name) : this.container.getAll<T>(serviceIdentifier);
    }
}
